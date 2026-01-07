/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:lng/learn/smart-contracts-101',
        destination: '/:lng/learn/smart-contracts',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
