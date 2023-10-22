/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    IPINFO_TOKEN: process.env.IPINFO_TOKEN,
  },
};

module.exports = nextConfig;
