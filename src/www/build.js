{
    //"appDir": ".",
    "baseUrl": "js/lib",
    "name": "app",
    //"dir": "../www_build",
    "out": "app.build.js",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    "optimize": "uglify",

    // point to the shim config we set up before
    "mainConfigFile": "js/app.js"

    /*
    "modules": [
        //Optimize the application files. jQuery and the plugins will be included
        //automatically, as they are dependencies of app.js.
        {
            "name": "app"
        }
    ]
    */
}