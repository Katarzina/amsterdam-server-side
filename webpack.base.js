module.exports = {
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                           'es2015',
                           'stage-0',
                           'react',
                           //['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                },
                /*query: {
                    plugins: ['transform-class-properties'], // Add this

                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true
                }*/
            },
            {
                test: /\.css$/,
                use: [ 'css-loader' ]
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader'
            }
        ]
    }
};