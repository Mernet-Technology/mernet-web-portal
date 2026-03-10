import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('admin-token')?.value;
  const authenticated = token === generateToken();
  return NextResponse.json({ authenticated });
}
