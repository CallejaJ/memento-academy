/**
 * Returns the CDN URL for a static asset path.
 * Falls back to the local path if CDN is not configured (e.g., in development).
 *
 * @example cdnUrl('/images/diagrams/web-evolution.png')
 * // With CDN: 'https://d1234567890.cloudfront.net/images/diagrams/web-evolution.png'
 * // Without CDN: '/images/diagrams/web-evolution.png'
 */
export function cdnUrl(path: string): string {
  const cdnBase = process.env.NEXT_PUBLIC_CDN_URL
  if (!cdnBase) return path
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${cdnBase}${normalizedPath}`
}
