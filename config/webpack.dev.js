const multiconfig = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");

multiconfig.forEach((config) => {
    config.mode = "development";
    config.optimization = {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_debugger: false, // Keep debugger statements
                    },
                },
            }),
        ],
    };
});

module.exports = multiconfig;
