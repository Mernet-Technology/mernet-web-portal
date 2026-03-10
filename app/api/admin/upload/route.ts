import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/admin-auth';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const token = request.cookies.get('admin-token')?.value;
  if (token !== generateToken()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('image') as File | null;

    if (!file || !file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'No valid image file provided' }, { status: 400 });
    }

    const uploadDir = path.join(process.cwd(), 'public', 'images', 'blog');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const ext = path.extname(file.name) || '.jpg';
    const baseName = path.basename(file.name, ext).replace(/[^a-z0-9-]/gi, '-').toLowerCase();
    const filename = `${Date.now()}-${baseName}${ext}`;

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(path.join(uploadDir, filename), buffer);

    return NextResponse.json({
      success: true,
      path: `/images/blog/${filename}`,
      filename,
    });
  } catch {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
