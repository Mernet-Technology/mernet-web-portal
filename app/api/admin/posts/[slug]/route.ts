import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/admin-auth';
import { getPostBySlug } from '@/lib/blog';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

type RouteCtx = { params: Promise<{ slug: string }> };

function isAuthed(request: NextRequest): boolean {
  return request.cookies.get('admin-token')?.value === generateToken();
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function safeSlug(raw: string): string {
  return raw.replace(/[^a-z0-9-]/g, '');
}

function findFileBySlug(slug: string): string | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  const matter = require('gray-matter');
  for (const file of files) {
    const fullPath = path.join(BLOG_DIR, file);
    const { data } = matter.read(fullPath);
    const fileSlug = (data.slug as string) || path.basename(file, path.extname(file));
    if (fileSlug === slug) return fullPath;
  }
  return null;
}

export async function GET(request: NextRequest, { params }: RouteCtx) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PUT(request: NextRequest, { params }: RouteCtx) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { slug: currentSlug } = await params;
  const oldFilePath = findFileBySlug(currentSlug);
  if (!oldFilePath) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  try {
    const { title, description, slug, date, author, image, tags, content } =
      await request.json();

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: 'Title, slug, and content are required' },
        { status: 400 },
      );
    }

    const newSlug = safeSlug(slug);
    const newFilePath = path.join(BLOG_DIR, `${newSlug}.md`);

    if (newSlug !== currentSlug && fs.existsSync(newFilePath)) {
      return NextResponse.json(
        { error: 'A post with this slug already exists' },
        { status: 409 },
      );
    }

    const lines: string[] = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `description: "${(description || '').replace(/"/g, '\\"')}"`,
      `slug: ${newSlug}`,
      `date: "${date}"`,
      `author: "${(author || 'Mernet Technologies').replace(/"/g, '\\"')}"`,
    ];
    if (image) lines.push(`image: "${image}"`);
    if (tags && tags.length > 0) {
      lines.push(`tags: [${tags.map((t: string) => `"${t.trim()}"`).join(', ')}]`);
    }
    lines.push('---');

    const fileContent = lines.join('\n') + '\n\n' + content.trimEnd() + '\n';

    if (oldFilePath !== newFilePath) {
      fs.unlinkSync(oldFilePath);
    }
    fs.writeFileSync(newFilePath, fileContent, 'utf-8');

    return NextResponse.json({ success: true, slug: newSlug });
  } catch {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteCtx) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { slug } = await params;
  const filePath = findFileBySlug(slug);
  if (!filePath) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  try {
    fs.unlinkSync(filePath);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
