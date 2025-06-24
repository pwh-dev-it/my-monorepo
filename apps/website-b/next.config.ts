import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  transpilePackages: ['@monorepo/api', '@monorepo/utils'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
