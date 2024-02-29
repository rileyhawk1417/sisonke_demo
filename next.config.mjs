/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-public.canva.com",
      },
    ],
  },
};

export default nextConfig;
