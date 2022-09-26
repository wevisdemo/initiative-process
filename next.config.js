/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@wevisdemo/ui"]);
const withVideos = require("next-videos");
const nextConfig = withTM(
  withVideos({
    basePath: "/initiative-process",
    distDir: "initiative-process",
    webpack(config, options) {
      return config;
    },
    reactStrictMode: false,
    swcMinify: true,
  })
);

module.exports = nextConfig;
