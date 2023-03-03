module.exports = function (context, options) {
  return {
    name: "glsl loader",
    configureWebpack(config, isServer, utils) {
      // const { getJSLoader } = utils;
      return {
        module: {
          rules: [
            {
              test: /\.(vert|frag|glsl)$/,
              use: {
                loader: "webpack-glsl-loader",
              },
            },

            {
              test: /\.(sass|scss)/,
              //ここまで変更
              use: [
                {
                  loader: "css-loader",
                },
                {
                  loader: "sass-loader",
                },
              ],
            },
          ],
        },
      };
    },
  };
};
