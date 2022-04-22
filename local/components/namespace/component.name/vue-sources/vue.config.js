console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  module.exports = {
    assetsDir:
      "../../../../../../local/components/namespace/component.name/templates/template.name",
    indexPath: "template.php",
    outputDir: "../templates/template.name",
    publicPath: "/section",
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/scss/base.scss";`,
        },
      },
    },
  };
} else {
  module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/scss/base.scss";`,
        },
      },
    },
  };
}
