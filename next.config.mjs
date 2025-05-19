/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.top4top.io',
        },
      ],
    },
  };
  
  export default nextConfig;