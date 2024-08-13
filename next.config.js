const { withStoreConfig } = require("./store-config");

module.exports = withStoreConfig({
  images: {
    remotePatterns: [
      {
        protocol: "http", // or https
        hostname: "localhost",
      },
    ],
  },
});
