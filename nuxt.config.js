// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require("path");

// 绝对路径
function resolve (dir) {
  return path.join(__dirname, "", dir);
}

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: "universal",
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: "server",
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: process.env.npm_package_description || "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: "~/plugins/amfe-flexible.js", mode: "client" },
    { src: "~/plugins/vant.js" },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module",
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
    // Doc: https://github.com/nuxt-community/svg-sprite-module
    "@nuxtjs/svg-sprite",
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    // 添加这个是关键，添加后babel才会处理依赖包vant里面的代码
    transpile: [/vant.*?less/],
    babel: {
      plugins: [
        ["import", {
          "libraryName": "vant",
          "style": (name) => {
            return `${name}/style/less.js`;
          },
        }, "vant"],
      ],
    },
    loaders: {
      less: {
        lessOptions: {
          modifyVars: {
            // 通过 modify.less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${resolve("assets/styles/modify.less")}";`,
          },
          globalVars: {
            // 引用 theme.less 文件（文件路径为绝对路径）
            hack: `true; @import "${resolve("assets/styles/theme.less")}";`,
          },
        },
      },
    },
    postcss: {
      plugins: {
        "postcss-pxtorem": {
          rootValue: 37.5,
          propList: ["*"],
        },
      },
    },
  },
};
