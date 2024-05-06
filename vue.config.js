// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://89.116.121.36:5000/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
    port: 8080
  },
};
