export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eagleholdings-ph.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // hide API routes from search engines
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
