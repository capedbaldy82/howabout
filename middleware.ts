import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (
    req.url.includes('profile') ||
    (req.url.includes('admin') && !req.url.includes('adminproduct'))
  ) {
    if (!req.cookies.get('accessToken')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
}
