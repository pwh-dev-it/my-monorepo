import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  transpilePackages: ['@monorepo/ui', '@monorepo/utils'],
};

export default nextConfig;
