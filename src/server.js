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
	'http',
	'express',
	'ejs',
	'mongoose',
	'os'
], function (http, express, ejs, mongoose, os) {

	console.log("==========================================");
	console.log("=");
	console.log("= Start nfradin.fr - Backend");
	console.log("= Dirname: " + __dirname);
	console.log("=");
	console.log("==========================================");

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
	app.set('views', __dirname + '/views');
	app.set('view options', { layout:false, root: __dirname + '/views' });


	// Define render engine default extensions
	app.engine('ejs', require('ejs').renderFile);
	app.engine('html', require('ejs').renderFile);


	// Default route
	app.get('/', function(req, res) {
		res.render('index.ejs', { title: 'The page!' });
	});


	//
	// Start HTTP listening...
	//
	app.listen(app.get('port'), function(){
		console.log("\n[Started] Backend is listening on : http://" + os.hostname().toLowerCase() + ":" + app.get('port'));
	});

});