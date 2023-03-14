const HtmlWebpackPlugin = 
    require('html-webpack-plugin');
module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
        },
        // add bootstrap package
        // {
        //   test: /\.css$/,
        //   use: ['style-loader', 'css-loader'],
        // }
        {
          test: /\.(sass|less|css)$/,
          use: ["style-loader", "css-loader", 'sass-loader'],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
    ],
   };
   
   