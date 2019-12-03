const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const template = require('./template');

const devMode = process.env.NODE_ENV !== 'production';

const plugins = [];
plugins.push(new ExtractTextPlugin({
  filename: 'css/style.css',
  disable: false,
  allChunks: true,
}));

module.exports = {
  entry: path.resolve(__dirname, './src/browser.js'),
	mode: devMode ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'js/bundle.js',
  },
  devServer: {
    disableHostCheck: true,
    contentBase: path.join(__dirname, './public'),
    port: 3456,
    before: (app) => {
      app.get(['/'], async (req, res) => { // Add other routes to array
        try {
          const html = await template(req, true);
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.send(html);
        } catch (err) {
          res.send(err);
        }
      });
    },
  },
  module: {
    rules: [
      {
        test: /\.marko$/,
        use: '@marko/webpack/loader',
      },
      {
        test: /\.sass|css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: !devMode,
            },
          }, {
            loader: 'sass-loader',
            options: {
              data: ['@import "themecolors";'],
              includePaths: [
                path.join(__dirname, 'src/sass/'),
              ],
            },
          }],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins,
};
