module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //use 属性可以是数组也可以是对象 当需要配置loader的其他属性options 如es2015等可以写成对象的方式
        use:[{loader:'style-loader'}, {loader:'css-loader'}]
      },
    ],
  },
};
