import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  transpilePackages: ['@monorepo/api', '@monorepo/utils'],
};

export default nextConfig;
