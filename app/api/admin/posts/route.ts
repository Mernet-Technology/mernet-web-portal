import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/admin-auth';
import { getAllPosts } from '@/lib/blog';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

function isAuthed(request: NextRequest): boolean {
  const token = request.cookies.get('admin-token')?.value;
  return token === generateToken();
}

export async function GET(request: NextRequest) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json(getAllPosts());
}

export async function POST(request: NextRequest) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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

    const blogDir = path.join(process.cwd(), 'content', 'blog');
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    const safeName = slug.replace(/[^a-z0-9-]/g, '');
    const filePath = path.join(blogDir, `${safeName}.md`);

    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'A post with this slug already exists' },
        { status: 409 },
      );
    }

    const lines: string[] = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `description: "${(description || '').replace(/"/g, '\\"')}"`,
      `slug: ${safeName}`,
      `date: "${date}"`,
      `author: "${(author || 'Mernet Technologies').replace(/"/g, '\\"')}"`,
    ];
    if (image) lines.push(`image: "${image}"`);
    if (tags && tags.length > 0) {
      lines.push(`tags: [${tags.map((t: string) => `"${t.trim()}"`).join(', ')}]`);
    }
    lines.push('---');

    const fileContent = lines.join('\n') + '\n\n' + content.trimEnd() + '\n';
    fs.writeFileSync(filePath, fileContent, 'utf-8');

    return NextResponse.json({ success: true, slug: safeName });
  } catch {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
