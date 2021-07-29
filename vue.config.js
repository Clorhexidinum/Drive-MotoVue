module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                  @import "@/assets/var.scss";
                  @import "@/assets/global.scss";
                  @import "@/assets/media.scss";
                  @import "@/assets/aside-filter.scss";
                  @import "@/assets/catalog-sort.scss";
                  @import "@/assets/slider.scss";
                  @import "@/assets/garanty.scss";
                `,
            },
        },
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule("svg");

        // clear all existing loaders.
        // if you don't do this, the loader below will be appended to
        // existing loaders of the rule.
        svgRule.uses.clear();

        // add replacement loader(s)
        svgRule.use("vue-svg-loader").loader("vue-svg-loader");
    },
    devServer: {
        proxy: "http://localhost:9090",
    },
    productionSourceMap: false,
};
