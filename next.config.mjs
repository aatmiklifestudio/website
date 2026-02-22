/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    unoptimized: true,
    domains: ['localhost'],
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}
