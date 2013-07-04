/**
*
*  nfradin.fr - Backend
*
*/

// RequireJS config
var requirejs = require('requirejs');
requirejs.config({
    nodeRequire: require
});


//
// Server.js
//
requirejs([
	'os',
	'fs',
	'http',
	'https',
	'express',
	'express-roads',
	'ejs',
	'mongoose'
], function (os, fs, http, https, express, expressRoads, ejs, mongoose) {

	console.log("==========================================");
	console.log("=");
	console.log("= Start nfradin.fr - Backend");
	console.log("= Dirname: " + __dirname);
	console.log("=");
	console.log("==========================================");

	// HTTPS Configuration
	// var hskey = fs.readFileSync(__dirname + '/../security/nfradin-key.pem');
	// var hscert = fs.readFileSync(__dirname + '/../security/nfradin-cert.pem');
	// var https_options = {
  //    key: hskey,
  //    cert: hscert
	// };


	// Create new application
	var app = express();
	app.set('port', process.env.PORT || 8080);
	app.use(app.routes);


	//
	// Connect to database
	//
	console.log("[Database] Connection to MongoHQ...");
	mongoose.connect(process.env.MONGO_URL);


	//
	// Set view folder
	//
	app.set('view engine', 'ejs');
	app.set('views', __dirname + '/www/templates');
	app.set('view options', { layout:false, root: __dirname + '/www/templates' });


	// Define render engine default extensions
	app.engine('ejs', require('ejs').renderFile);
	app.engine('html', require('ejs').renderFile);


	//
	// Initialize Application routes
	//
	expressRoads.initialize(app, {
		baseDir: __dirname,
		routesDir: './routes',
		debug: false
	}, function() {

		// Define public directories
		app.use('/css', express.static(__dirname + '/www/css'));
		app.use('/js', express.static(__dirname + '/www/js'));
		app.use('/templates', express.static(__dirname + '/www/templates'));

		//
		// Start server...
		//
		http.createServer(/*https_options,*/app).listen(app.get('port'), function() {
			console.log("\n[Started] Backend is listening on : http://" + os.hostname().toLowerCase() + ":" + app.get('port'));
		});

	});
});
