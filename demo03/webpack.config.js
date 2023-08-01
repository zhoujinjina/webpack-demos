module.exports = {
    entry: './main.js',
    output: {
      filename: 'bundle.js'
    },
    module:{
      rules:[
        {
          test:/\.jsx?$/,//匹配所有jsx和js文件 
          exclude: /node_modules/,
          use:{ 
            loader: 'babel-loader',
            options:{
              presets:['es2015', 'react']
            }
          }
        }
      ]
    }
  };