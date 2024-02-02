/**
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#robots-object
 */

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://acme.com/sitemap.xml',
  }
}
