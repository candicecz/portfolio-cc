const path = require("path");

module.exports = {
  type: "react-app",
  devServer: {
    disableHostCheck: true,
  },
  babel: {
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          ssr: false,
          minify: false,
          transpileTemplateLiterals: false,
          pure: true,
          fileName: false,
        },
      ],
    ],
  },
  webpack: {
    publicPath: "/",
    aliases: {
      src: path.resolve("src"),
    },
  },
};
