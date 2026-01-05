/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_DO_SPACES_HOST,
        pathname: process.env.NEXT_PUBLIC_DO_SPACES_PATH,
        port: "",
      },
    ],
  },
};

export default nextConfig;
