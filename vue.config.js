// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://3.107.38.242:5000/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
