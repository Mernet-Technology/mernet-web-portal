import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import MarkdownContent from '@/app/components/blog/MarkdownContent';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mernet.co.tz';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.image ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`) : undefined;
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url,
      images: image ? [{ url: image, alt: post.title }] : undefined,
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image
    ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`)
    : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'Mernet Technologies' },
    url,
    image: imageUrl,
  };

  return (
    <main className="pt-32">
      <article className="max-w-3xl mx-auto px-4 pb-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header className="mb-8">
          <Link
            href="/blog"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
          <time
            className="text-sm block mb-2"
            style={{ color: 'var(--text-muted)' }}
            dateTime={post.date}
          >
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {post.title}
          </h1>
          {post.author && (
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {post.author}
            </p>
          )}
          {post.image && (
            <div className="mt-6 rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
              <img
                src={imageUrl ?? post.image}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </header>
        <div className="prose-custom">
          <MarkdownContent content={post.content} baseUrl={SITE_URL} />
        </div>
      </article>
    </main>
  );
}
