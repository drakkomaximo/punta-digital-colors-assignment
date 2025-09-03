/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Deshabilitar server-side features para export estático
  experimental: {
    appDir: true
  }
};

export default nextConfig;
