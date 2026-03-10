import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import SectionTitle from '../components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on software development, inventory management, ICT solutions, and digital transformation for businesses in Tanzania.',
  openGraph: {
    title: 'Blog | Mernet Technologies',
    description:
      'Insights on software development, ICT solutions, and business systems for Tanzanian organizations.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="pt-32">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle
            title="Blog"
            heading="Insights on software and ICT for business"
            description="Practical articles on inventory systems, church and restaurant management, and digital transformation."
          />

          {posts.length === 0 ? (
            <p className="text-center py-12" style={{ color: 'var(--text-secondary)' }}>
              No posts yet. Check back soon.
            </p>
          ) : (
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    {post.image && (
                      <div className="aspect-video bg-gray-200 dark:bg-gray-800">
                        <img
                          src={post.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <time
                        className="text-sm"
                        style={{ color: 'var(--text-muted)' }}
                        dateTime={post.date}
                      >
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <h2
                        className="text-xl font-semibold mt-2 mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="text-sm line-clamp-3"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {post.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
