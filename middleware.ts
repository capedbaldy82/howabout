import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.url.includes('profile')) {
    if (!req.cookies.get('accessToken')) {
      return NextResponse.redirect(new URL('/login', req.url));
    } else {
      console.log('no cookie');
    }
  }
}
