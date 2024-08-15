/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    distDir: 'build',
    experimental: {
        webpackBuildWorker: true,
    }
};

export default nextConfig;
