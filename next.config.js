/** @type {import('next').NextConfig} */

const nextConfig = {
  env: { SECRET_HMAC: process.env.SECRET_HMAC },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/YuriCF1.png/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/YuriCF1/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/gh/devicons/**",
      },
    ],
  },
};

module.exports = nextConfig;
