import { NextResponse } from 'next/server';

// Paths that should NOT have trailing slashes (individual posts under these paths)
const noTrailingSlashPrefixes = [
  '/blog/',
  '/insights-and-case-studies/',
  '/reviews/'
];

const noTrailingSlashExact = ['/culture'];

export function middleware(req) {
  const url = new URL(req.url);
  const pathname = url.pathname;

  // Skip trailing slash logic for homepage
  if (pathname === '/') {
    const isPreview = url.searchParams.get('preview') === 'true';
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-preview', isPreview ? '1' : '0');
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // Remove trailing slash for exact paths like /culture
  if (noTrailingSlashExact.includes(pathname.replace(/\/$/, ''))) {
    if (pathname.endsWith('/')) {
      url.pathname = pathname.slice(0, -1);
      return NextResponse.redirect(url, 301);
    }
    return NextResponse.next(); // <-- IMPORTANT: prevents adding slash again
  }

  // Check if this path should NOT have a trailing slash (blog/case study individual posts)
  const isNoTrailingSlashPath = noTrailingSlashPrefixes.some(prefix => {
    // Match paths like /blog/slug or /insights-and-case-studies/slug
    // But NOT the listing pages /blog or /insights-and-case-studies
    if (pathname.startsWith(prefix)) {
      const remainder = pathname.slice(prefix.length).replace(/\/$/, '');
      return remainder.length > 0; // Has a slug after the prefix
    }
    return false;
  });

  if (isNoTrailingSlashPath) {
    // Remove trailing slash if present
    if (pathname.endsWith('/')) {
      url.pathname = pathname.slice(0, -1);
      return NextResponse.redirect(url, 301);
    }
  } else {
    // Add trailing slash if missing (for all other pages)
    if (!pathname.endsWith('/')) {
      url.pathname = pathname + '/';
      return NextResponse.redirect(url, 301);
    }
  }

  // Existing preview logic (preserved from original)
  const isPreview = url.searchParams.get('preview') === 'true';
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-preview', isPreview ? '1' : '0');

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = { matcher: ['/((?!_next|.*\\..*).*)'] };
