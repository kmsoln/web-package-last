const path = require('path');

module.exports = {
    entry: './src/utils/LodashUtils.js', // Main entry file
    output: {
        filename: 'bundle.js', // Output bundle file
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply Babel on JavaScript files
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/, // Apply style and CSS loaders
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: 'development', // or 'production' for optimized builds
};
