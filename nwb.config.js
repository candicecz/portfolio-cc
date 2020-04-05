const path = require("path");

module.exports = {
  type: "react-app",
  devServer: {
    // host: "172.20.10.2", //your ip address
    // port: 8080,
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
