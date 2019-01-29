// create absolute path
var path = require('path');

// it is going to go throught all of imported files in app.js
module.exports = {
		
//	    main() of javascript
//	    webpack must know this to know what to launch /when bundle is loaded by browser
//      where to start
    entry: {
        app:'./src/main/js/app.js', 
        admin:'./src/main/js/admin.js'
    }, 
        devtool: 'sourcemaps',
        cache: true,
        mode: 'development', 
// where to end        
    output: {
//      this is absolute path
        path: path.resolve(__dirname),
//    	compile all of the javascript into
        filename: './src/main/resources/static/built/[name].bundle.js'
    },
// which individual file to load
    module: {
        // add multi static files
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    // load code
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env", "@babel/preset-react"],
                        // apply on bundle before output
                        "plugins": ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"]
                    }
                }]
            }
        ]
    }
// right before create code

};