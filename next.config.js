/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@wevisdemo/ui"]);
const withVideos = require("next-videos");
const withImages = require("next-images");
const nextConfig = withImages(
  withTM(
    withVideos({
      basePath: "/initiativelaw",
      assetPrefix: "/initiativelaw",
      fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
      reactStrictMode: false,
      swcMinify: true,
      images: {
        disableStaticImages: true,
      },
      webpack(config, options) {
        return config;
      },
    })
  )
);

module.exports = nextConfig;
