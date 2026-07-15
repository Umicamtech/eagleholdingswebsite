/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Lint errors won't block production builds; run `npm run lint` separately.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
