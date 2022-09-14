/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@wevisdemo/ui"]);
const nextConfig = withTM({
  reactStrictMode: false,
  swcMinify: true,
});

module.exports = nextConfig;
