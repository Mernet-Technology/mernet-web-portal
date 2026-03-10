'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plus, LogOut, FileText, Pencil, Trash2, ExternalLink } from 'lucide-react';

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  tags?: string[];
}

export default function AdminPostsPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/admin/auth')
      .then((r) => r.json())
      .then((data) => {
        if (!data.authenticated) {
          router.replace('/admin');
          return;
        }
        return fetch('/api/admin/posts').then((r) => r.json());
      })
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        router.replace('/admin');
      });
  }, [router]);

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin');
  }

  async function handleDelete(slug: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(slug);
    const res = await fetch(`/api/admin/posts/${slug}`, { method: 'DELETE' });
    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.slug !== slug));
    }
    setDeleting(null);
  }

  if (loading) {
    return (
      <main className="pt-32 min-h-screen flex items-center justify-center">
        <p style={{ color: 'var(--text-muted)' }}>Loading...</p>
      </main>
    );
  }

  return (
    <main className="pt-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1
              className="text-2xl font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              Blog Posts
            </h1>
            <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
              {posts.length} post{posts.length !== 1 ? 's' : ''} published
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/posts/new"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              <Plus className="w-4 h-4" />
              New Post
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200"
              style={{
                backgroundColor: 'var(--accent-bg)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-color)',
              }}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {posts.length === 0 ? (
          <div
            className="text-center py-16 rounded-2xl"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }}
          >
            <FileText
              className="w-10 h-10 mx-auto mb-3"
              style={{ color: 'var(--text-muted)' }}
            />
            <p style={{ color: 'var(--text-muted)' }}>
              No posts yet. Create your first one.
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                }}
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt=""
                    className="w-20 h-14 rounded-lg object-cover shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h2
                    className="font-semibold truncate"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-sm mt-0.5 truncate"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {post.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <time
                      className="text-xs"
                      style={{ color: 'var(--text-muted)' }}
                      dateTime={post.date}
                    >
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </time>
                    {post.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: 'var(--accent-bg)',
                          color: 'var(--accent-color)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    title="View post"
                    className="p-2 rounded-lg transition-colors hover:opacity-80"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/admin/posts/${post.slug}/edit`}
                    title="Edit post"
                    className="p-2 rounded-lg transition-colors hover:opacity-80"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <Pencil className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(post.slug, post.title)}
                    disabled={deleting === post.slug}
                    title="Delete post"
                    className="p-2 rounded-lg transition-colors hover:text-red-500 disabled:opacity-50"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
