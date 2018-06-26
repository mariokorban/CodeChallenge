const path = require('path');

module.exports = {
    //start from the index file in the src directory
    entry: './src/index.js',
    //bundle all the modules we depend on inside a bundle.js file under the public directory
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module:{
        rules:[
            {
                //for every file ending with .js run the babel loader on it
                test: /\.js$/,
                use: 'babel-loader'
                    
            }
        ]
    }
};