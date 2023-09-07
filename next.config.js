/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.shinsegaepoint.com","s3-alpha-sig.figma.com"],
  },
  env: {
    NEXT_PUBLIC_API_URL: 'http://10.10.10.185:8000',
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/logout',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ]
  // },
};

module.exports = nextConfig;
