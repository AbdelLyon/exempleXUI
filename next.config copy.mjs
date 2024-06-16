/** @type {import('next').NextConfig} */
const nextConfig = {
   env: {
      API_KEY: process.env.API_KEY,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**', // Adjust the pathname pattern according to your needs
        },
      ],
    },
};

export default nextConfig;
