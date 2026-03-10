'use client';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  ArrowLeft, Eye, Pencil, Loader2,
  Bold, Italic, Strikethrough,
  Heading2, Heading3, List, ListOrdered,
  Link as LinkIcon, ImageIcon, Upload,
  Code, Quote, Minus, HelpCircle, X,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface PostData {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  content: string;
}

interface PostEditorProps {
  mode: 'create' | 'edit';
  initialSlug?: string;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/* ------------------------------------------------------------------ */
/*  Markdown toolbar insertion logic                                   */
/* ------------------------------------------------------------------ */

type InsertType = 'wrap' | 'prefix' | 'block';

function applyMarkdown(
  textarea: HTMLTextAreaElement,
  content: string,
  type: InsertType,
  before: string,
  after = '',
): { newContent: string; cursor: number } {
  const { selectionStart: s, selectionEnd: e } = textarea;
  const selected = content.substring(s, e);

  if (type === 'wrap') {
    const replacement = before + (selected || 'text') + after;
    const newContent = content.substring(0, s) + replacement + content.substring(e);
    const cursor = s + before.length + (selected || 'text').length;
    return { newContent, cursor };
  }

  if (type === 'prefix') {
    const lineStart = content.lastIndexOf('\n', s - 1) + 1;
    const newContent = content.substring(0, lineStart) + before + content.substring(lineStart);
    return { newContent, cursor: s + before.length };
  }

  // block — insert on its own lines
  const insertion = '\n' + before + (selected || '') + after + '\n';
  const newContent = content.substring(0, s) + insertion + content.substring(e);
  return { newContent, cursor: s + 1 + before.length + (selected || '').length };
}

/* ------------------------------------------------------------------ */
/*  Toolbar config                                                     */
/* ------------------------------------------------------------------ */

interface ToolbarAction {
  label: string;
  icon: React.ReactNode;
  type: InsertType;
  before: string;
  after?: string;
  dividerAfter?: boolean;
}

const toolbarActions: ToolbarAction[] = [
  { label: 'Bold', icon: <Bold className="w-4 h-4" />, type: 'wrap', before: '**', after: '**' },
  { label: 'Italic', icon: <Italic className="w-4 h-4" />, type: 'wrap', before: '*', after: '*' },
  { label: 'Strikethrough', icon: <Strikethrough className="w-4 h-4" />, type: 'wrap', before: '~~', after: '~~', dividerAfter: true },
  { label: 'Heading 2', icon: <Heading2 className="w-4 h-4" />, type: 'prefix', before: '## ' },
  { label: 'Heading 3', icon: <Heading3 className="w-4 h-4" />, type: 'prefix', before: '### ', dividerAfter: true },
  { label: 'Bullet list', icon: <List className="w-4 h-4" />, type: 'prefix', before: '- ' },
  { label: 'Numbered list', icon: <ListOrdered className="w-4 h-4" />, type: 'prefix', before: '1. ' },
  { label: 'Blockquote', icon: <Quote className="w-4 h-4" />, type: 'prefix', before: '> ', dividerAfter: true },
  { label: 'Link', icon: <LinkIcon className="w-4 h-4" />, type: 'wrap', before: '[', after: '](url)' },
  { label: 'Image', icon: <ImageIcon className="w-4 h-4" />, type: 'wrap', before: '![alt](', after: ')' },
  { label: 'Inline code', icon: <Code className="w-4 h-4" />, type: 'wrap', before: '`', after: '`' },
  { label: 'Code block', icon: <span className="text-xs font-mono font-bold">{'{ }'}</span>, type: 'block', before: '```\n', after: '\n```', dividerAfter: true },
  { label: 'Horizontal rule', icon: <Minus className="w-4 h-4" />, type: 'block', before: '---' },
];

/* ------------------------------------------------------------------ */
/*  Markdown tips                                                      */
/* ------------------------------------------------------------------ */

const mdTips = [
  { syntax: '**bold**', result: 'bold' },
  { syntax: '*italic*', result: 'italic' },
  { syntax: '~~strike~~', result: 'strikethrough' },
  { syntax: '## Heading 2', result: 'section heading' },
  { syntax: '### Heading 3', result: 'sub-heading' },
  { syntax: '- item', result: 'bullet list' },
  { syntax: '1. item', result: 'numbered list' },
  { syntax: '[text](url)', result: 'link' },
  { syntax: '![alt](url)', result: 'image' },
  { syntax: '`code`', result: 'inline code' },
  { syntax: '```...```', result: 'code block' },
  { syntax: '> quote', result: 'blockquote' },
  { syntax: '---', result: 'horizontal rule' },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PostEditor({ mode, initialSlug }: PostEditorProps) {
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [authed, setAuthed] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(mode === 'create');
  const [tab, setTab] = useState<'write' | 'preview'>('write');
  const [showTips, setShowTips] = useState(false);

  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugEdited, setSlugEdited] = useState(false);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(todayISO());
  const [author, setAuthor] = useState('Mernet Technologies');
  const [image, setImage] = useState('');
  const [tagsRaw, setTagsRaw] = useState('');
  const [content, setContent] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  /* ---- Auth check ---- */
  useEffect(() => {
    fetch('/api/admin/auth')
      .then((r) => r.json())
      .then((d) => {
        if (!d.authenticated) router.replace('/admin');
        else setAuthed(true);
      })
      .catch(() => router.replace('/admin'));
  }, [router]);

  /* ---- Load existing post for edit mode ---- */
  useEffect(() => {
    if (mode !== 'edit' || !initialSlug || !authed) return;
    fetch(`/api/admin/posts/${initialSlug}`)
      .then((r) => {
        if (!r.ok) throw new Error('Not found');
        return r.json();
      })
      .then((post) => {
        setTitle(post.title);
        setSlug(post.slug);
        setSlugEdited(true);
        setDescription(post.description || '');
        setDate(post.date || todayISO());
        setAuthor(post.author || 'Mernet Technologies');
        setImage(post.image || '');
        setTagsRaw(post.tags?.join(', ') || '');
        setContent(post.content || '');
        setDataLoaded(true);
      })
      .catch(() => {
        setError('Post not found.');
        setDataLoaded(true);
      });
  }, [mode, initialSlug, authed]);

  /* ---- Auto-slug from title ---- */
  useEffect(() => {
    if (!slugEdited) setSlug(slugify(title));
  }, [title, slugEdited]);

  const tags = useMemo(
    () => tagsRaw.split(',').map((t) => t.trim()).filter(Boolean),
    [tagsRaw],
  );

  /* ---- Toolbar action ---- */
  const handleToolbar = useCallback(
    (action: ToolbarAction) => {
      const ta = textareaRef.current;
      if (!ta) return;
      const { newContent, cursor } = applyMarkdown(
        ta, content, action.type, action.before, action.after,
      );
      setContent(newContent);
      setTimeout(() => {
        ta.focus();
        ta.setSelectionRange(cursor, cursor);
      }, 0);
    },
    [content],
  );

  /* ---- Image upload ---- */
  const handleImageUpload = useCallback(async (file: File) => {
    setUploading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('image', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: formData });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || 'Upload failed');
      }
      const { path: imgPath } = await res.json();
      // Insert markdown image at cursor
      const ta = textareaRef.current;
      if (ta) {
        const s = ta.selectionStart;
        const mdImage = `![${file.name}](${imgPath})`;
        const newContent = content.substring(0, s) + mdImage + content.substring(ta.selectionEnd);
        setContent(newContent);
        setTimeout(() => {
          ta.focus();
          ta.setSelectionRange(s + mdImage.length, s + mdImage.length);
        }, 0);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  }, [content]);

  /* ---- Submit ---- */
  async function handleSubmit() {
    if (!title.trim() || !slug.trim() || !content.trim()) {
      setError('Title, slug, and content are required.');
      return;
    }
    setError('');
    setSuccess('');
    setSubmitting(true);

    const body = {
      title: title.trim(),
      description: description.trim(),
      slug: slug.trim(),
      date,
      author: author.trim(),
      image: image.trim() || undefined,
      tags: tags.length > 0 ? tags : undefined,
      content,
    };

    const url = mode === 'create' ? '/api/admin/posts' : `/api/admin/posts/${initialSlug}`;
    const method = mode === 'create' ? 'POST' : 'PUT';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.push('/admin/posts');
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Something went wrong.');
      setSubmitting(false);
    }
  }

  /* ---- Loading states ---- */
  if (!authed || !dataLoaded) {
    return (
      <main className="pt-32 min-h-screen flex items-center justify-center">
        <p style={{ color: 'var(--text-muted)' }}>Loading...</p>
      </main>
    );
  }

  /* ---- Shared styles ---- */
  const inputClass =
    'w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-blue-500/40';
  const inputStyle = {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
  };
  const labelClass = 'text-sm font-medium block mb-1.5';
  const labelStyle = { color: 'var(--text-secondary)' };

  const pageTitle = mode === 'create' ? 'New Post' : 'Edit Post';
  const submitLabel = mode === 'create' ? 'Publish' : 'Save Changes';

  return (
    <main className="pt-32 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 pb-20">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/posts"
              className="p-2 rounded-lg transition-colors duration-200 hover:opacity-80"
              style={{ backgroundColor: 'var(--accent-bg)', border: '1px solid var(--border-color)' }}
            >
              <ArrowLeft className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
            </Link>
            <h1 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              {pageTitle}
            </h1>
          </div>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
          >
            {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
            {submitting ? 'Saving...' : submitLabel}
          </button>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-6 px-4 py-3 rounded-xl text-sm text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 border border-red-200 dark:border-red-800/40">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-6 px-4 py-3 rounded-xl text-sm text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 border border-green-200 dark:border-green-800/40">
            {success}
          </div>
        )}

        {/* ============================================================= */}
        {/*  Metadata fields                                               */}
        {/* ============================================================= */}
        <div
          className="rounded-2xl p-6 mb-6"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="title" className={labelClass} style={labelStyle}>Title *</label>
              <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                placeholder="How Inventory Systems Help Businesses Scale" className={inputClass} style={inputStyle} />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="slug" className={labelClass} style={labelStyle}>Slug (URL) *</label>
              <div className="flex items-center gap-2">
                <span className="text-sm shrink-0" style={{ color: 'var(--text-muted)' }}>/blog/</span>
                <input id="slug" type="text" value={slug}
                  onChange={(e) => { setSlug(e.target.value); setSlugEdited(true); }}
                  placeholder="your-post-slug" className={inputClass} style={inputStyle} />
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="description" className={labelClass} style={labelStyle}>Description</label>
              <input id="description" type="text" value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="A short summary for SEO and the blog listing card" className={inputClass} style={inputStyle} />
            </div>

            <div>
              <label htmlFor="date" className={labelClass} style={labelStyle}>Date</label>
              <input id="date" type="date" value={date}
                onChange={(e) => setDate(e.target.value)} className={inputClass} style={inputStyle} />
            </div>
            <div>
              <label htmlFor="author" className={labelClass} style={labelStyle}>Author</label>
              <input id="author" type="text" value={author}
                onChange={(e) => setAuthor(e.target.value)} className={inputClass} style={inputStyle} />
            </div>

            <div>
              <label htmlFor="image" className={labelClass} style={labelStyle}>Cover image path</label>
              <input id="image" type="text" value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="/images/blog/my-image.jpg" className={inputClass} style={inputStyle} />
            </div>
            <div>
              <label htmlFor="tags" className={labelClass} style={labelStyle}>Tags (comma-separated)</label>
              <input id="tags" type="text" value={tagsRaw}
                onChange={(e) => setTagsRaw(e.target.value)}
                placeholder="inventory, Tanzania, software" className={inputClass} style={inputStyle} />
            </div>
          </div>
        </div>

        {/* ============================================================= */}
        {/*  Editor + Preview                                              */}
        {/* ============================================================= */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
        >
          {/* Toolbar + tabs */}
          <div className="flex flex-wrap items-center gap-0 border-b" style={{ borderColor: 'var(--border-color)' }}>

            {/* Write / Preview tabs */}
            <button onClick={() => setTab('write')}
              className={`inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium transition-colors ${tab === 'write' ? 'border-b-2 border-blue-500' : ''}`}
              style={{ color: tab === 'write' ? 'var(--accent-color)' : 'var(--text-muted)' }}>
              <Pencil className="w-3.5 h-3.5" /> Write
            </button>
            <button onClick={() => setTab('preview')}
              className={`inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium transition-colors ${tab === 'preview' ? 'border-b-2 border-blue-500' : ''}`}
              style={{ color: tab === 'preview' ? 'var(--accent-color)' : 'var(--text-muted)' }}>
              <Eye className="w-3.5 h-3.5" /> Preview
            </button>

            {/* Divider */}
            <div className="w-px h-6 mx-1" style={{ backgroundColor: 'var(--border-color)' }} />

            {/* Formatting toolbar */}
            {tab === 'write' && (
              <>
                {toolbarActions.map((action, i) => (
                  <span key={i} className="inline-flex items-center">
                    <button
                      type="button"
                      title={action.label}
                      onClick={() => handleToolbar(action)}
                      className="p-2 rounded-md hover:opacity-80 transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {action.icon}
                    </button>
                    {action.dividerAfter && (
                      <div className="w-px h-5 mx-0.5" style={{ backgroundColor: 'var(--border-color)' }} />
                    )}
                  </span>
                ))}

                {/* Upload image button */}
                <div className="w-px h-5 mx-0.5" style={{ backgroundColor: 'var(--border-color)' }} />
                <button
                  type="button"
                  title="Upload image"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="p-2 rounded-md hover:opacity-80 transition-colors"
                  style={{ color: uploading ? 'var(--accent-color)' : 'var(--text-muted)' }}
                >
                  {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleImageUpload(f);
                    e.target.value = '';
                  }}
                />

                {/* Tips toggle */}
                <button
                  type="button"
                  title="Markdown tips"
                  onClick={() => setShowTips((v) => !v)}
                  className={`p-2 rounded-md hover:opacity-80 transition-colors ml-auto ${showTips ? '' : ''}`}
                  style={{ color: showTips ? 'var(--accent-color)' : 'var(--text-muted)' }}
                >
                  {showTips ? <X className="w-4 h-4" /> : <HelpCircle className="w-4 h-4" />}
                </button>
              </>
            )}
          </div>

          {/* Markdown Tips panel */}
          {showTips && tab === 'write' && (
            <div
              className="px-6 py-4 border-b text-sm"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
            >
              <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Markdown Cheatsheet
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-1.5">
                {mdTips.map((tip) => (
                  <div key={tip.syntax} className="flex items-baseline gap-2">
                    <code
                      className="text-xs px-1.5 py-0.5 rounded font-mono shrink-0"
                      style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--accent-color)' }}
                    >
                      {tip.syntax}
                    </code>
                    <span style={{ color: 'var(--text-muted)' }} className="text-xs">{tip.result}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t space-y-1" style={{ borderColor: 'var(--border-color)' }}>
                <p style={{ color: 'var(--text-muted)' }} className="text-xs">
                  <strong style={{ color: 'var(--text-secondary)' }}>Tip:</strong> Select text, then click a toolbar button to wrap it. Or place your cursor and click to insert syntax.
                </p>
                <p style={{ color: 'var(--text-muted)' }} className="text-xs">
                  <strong style={{ color: 'var(--text-secondary)' }}>Images:</strong> Click the <Upload className="w-3 h-3 inline" /> button to upload an image. It will be inserted at your cursor position.
                </p>
                <p style={{ color: 'var(--text-muted)' }} className="text-xs">
                  <strong style={{ color: 'var(--text-secondary)' }}>Blank line:</strong> Leave an empty line between paragraphs, headings, and lists for proper spacing.
                </p>
              </div>
            </div>
          )}

          {/* Content area */}
          {tab === 'write' ? (
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={'Write your post in Markdown...\n\n## A Section Heading\n\nYour paragraph here with **bold** and *italic* text.\n\n- Bullet list item\n- Another item\n\n[Link text](/contact)'}
              className="w-full min-h-[480px] p-6 text-sm font-mono outline-none resize-y"
              style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}
            />
          ) : (
            <div className="p-6 min-h-[480px]">
              {content.trim() ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ children }) => <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: 'var(--text-primary)' }}>{children}</h2>,
                    h3: ({ children }) => <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: 'var(--text-primary)' }}>{children}</h3>,
                    p: ({ children }) => <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{children}</p>,
                    ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-1" style={{ color: 'var(--text-secondary)' }}>{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-1" style={{ color: 'var(--text-secondary)' }}>{children}</ol>,
                    a: ({ href, children }) => <a href={href} className="text-blue-600 dark:text-blue-400 underline hover:opacity-80">{children}</a>,
                    strong: ({ children }) => <strong className="font-semibold" style={{ color: 'var(--text-primary)' }}>{children}</strong>,
                    blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic" style={{ color: 'var(--text-muted)' }}>{children}</blockquote>,
                    code: ({ children, className }) => {
                      const isBlock = className?.includes('language-');
                      return isBlock
                        ? <code className="block rounded-xl p-4 text-sm font-mono my-4 overflow-x-auto" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>{children}</code>
                        : <code className="px-1.5 py-0.5 rounded text-sm font-mono" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--accent-color)' }}>{children}</code>;
                    },
                    hr: () => <hr className="my-6" style={{ borderColor: 'var(--border-color)' }} />,
                    img: ({ src, alt }) => (
                      <img src={src} alt={alt || ''} className="rounded-xl max-w-full my-4" style={{ border: '1px solid var(--border-color)' }} />
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              ) : (
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Start writing to see a preview here.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
