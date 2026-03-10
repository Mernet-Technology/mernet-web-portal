import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  tags?: string[];
  content: string;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  return files.map((f) => {
    const fullPath = path.join(BLOG_DIR, f);
    const { data } = matter.read(fullPath);
    return (data.slug as string) || path.basename(f, path.extname(f));
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  for (const file of files) {
    const fullPath = path.join(BLOG_DIR, file);
    const { data, content } = matter.read(fullPath);
    const postSlug = (data.slug as string) || path.basename(file, path.extname(file));
    if (postSlug === slug) {
      return {
        slug: postSlug,
        title: (data.title as string) ?? '',
        description: (data.description as string) ?? '',
        date: (data.date as string) ?? '',
        author: (data.author as string) ?? 'Mernet Technologies',
        image: data.image as string | undefined,
        tags: Array.isArray(data.tags) ? data.tags : undefined,
        content,
      };
    }
  }
  return null;
}

export function getAllPosts(): Omit<BlogPost, 'content'>[] {
  const slugs = getAllSlugs();
  const posts: Omit<BlogPost, 'content'>[] = [];
  for (const slug of slugs) {
    const post = getPostBySlug(slug);
    if (post) {
      const { content: _, ...rest } = post;
      posts.push(rest);
    }
  }
  posts.sort((a, b) => (b.date > a.date ? 1 : -1));
  return posts;
}
