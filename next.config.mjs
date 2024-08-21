/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    distDir: 'build',
};

import { ip } from 'address'

if (process.env.NODE_ENV === 'development') {
    console.log(`ip: ${ip()}`);
  }

export default nextConfig;
