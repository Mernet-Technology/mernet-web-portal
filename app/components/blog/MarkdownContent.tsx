import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
  /** Base URL for resolving relative image/link paths (e.g. https://yoursite.com). Set in prod so images load. */
  baseUrl?: string;
}

export default function MarkdownContent({ content, baseUrl = '' }: MarkdownContentProps) {
  const resolveUrl = (url: string | undefined) => {
    if (!url) return url;
    if (url.startsWith('http')) return url;
    return baseUrl ? `${baseUrl.replace(/\/$/, '')}${url.startsWith('/') ? url : `/${url}`}` : url;
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2
            className="text-xl font-semibold mt-8 mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3
            className="text-lg font-semibold mt-6 mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p
            className="mb-4 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-4 space-y-1" style={{ color: 'var(--text-secondary)' }}>
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-4 space-y-1" style={{ color: 'var(--text-secondary)' }}>
            {children}
          </ol>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold" style={{ color: 'var(--text-primary)' }}>
            {children}
          </strong>
        ),
        img: ({ src, alt }) => (
          <img
            src={resolveUrl(src)}
            alt={alt ?? ''}
            className="rounded-xl max-w-full h-auto my-4"
            style={{ border: '1px solid var(--border-color)' }}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
