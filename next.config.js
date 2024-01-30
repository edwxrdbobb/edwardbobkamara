const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? '/your-repository-name' : '';

const nextConfig = {
  basePath,
  assetPrefix: basePath,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: !isProd,
  },
  images: {
    // Enable Image Optimization
    disableStaticImages: false,
    unoptimized: false,
  },
};

module.exports = withPWA({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      use: {
        loader: "url-loader",
      },
    });

    return config;
  },
  ...nextConfig,
});
