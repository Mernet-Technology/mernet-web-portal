'use client';
import { use } from 'react';
import PostEditor from '@/app/components/admin/PostEditor';

export default function EditPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  return <PostEditor mode="edit" initialSlug={slug} />;
}
