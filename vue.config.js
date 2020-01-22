module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/styles.scss";`
      }
    }
  }
};
