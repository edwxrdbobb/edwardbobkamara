const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: !isProd,
  },
  images: {
    // Disable Image Optimization during export
    disableStaticImages: true,
    unoptimized: true
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
