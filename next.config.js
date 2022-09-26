/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@wevisdemo/ui"]);
const withVideos = require("next-videos");
const nextConfig = withTM(
  withVideos({
    reactStrictMode: false,
    swcMinify: true,
  })
);

module.exports = nextConfig;
