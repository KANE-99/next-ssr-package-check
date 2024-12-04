// app/api/hello/route.js
import ContentstackLivePreview from '@contentstack/live-preview-utils';
import { NextResponse } from 'next/server';

// Middleware to log requests
export async function middleware(req) {
  console.log('Request received:', req.method, req.url, ContentstackLivePreview.getSdkVersion());
  return NextResponse.next();
}

// API Route Handler
export async function GET(req) {
  console.log('ContentstackLivePreview:', ContentstackLivePreview.getSdkVersion());
  const data = { message: 'Hello, Next.js 14!', version: ContentstackLivePreview.getSdkVersion() };

  return NextResponse.json(data);
}
