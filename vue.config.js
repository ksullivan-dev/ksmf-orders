const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: "system",
    },
    // externals: ["vue", "vue-router", /^@ksmf\/.+/],
  },
  filenameHashing: false,
});
