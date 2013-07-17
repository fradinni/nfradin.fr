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
	'passport',
	'passport-google',
	'ejs',
	'mongoose',
	'utils/EJSCompiler'
], function (os, fs, http, https, express, ExpressRoads, passport, passportGoogle, ejs, mongoose, EJSCompiler) {

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


	var cookieSecret = '$=[Fradinni$ecret)-!';

	// Create new application
	var app = express();
	app.set('port', process.env.PORT || 8080);
	app.use(express.compress());
	app.use(express.cookieParser(cookieSecret));
	app.use(express.session({ 
		key: 'fradinni.sid',
		secret: cookieSecret 
	}));
	app.use(express.bodyParser());
	app.use(passport.initialize());
  	app.use(passport.session());
	app.use(app.routes);


	//
	// Passport Config
	//
	var Models = require('./db/models')(mongoose);
	var User = Models.User;
	var GoogleStrategy = passportGoogle.Strategy;

	passport.use(
		new GoogleStrategy({
	    	returnURL: 'http://localhost:8080/auth/google/return',
	    	realm: 'http://localhost:8080'
	  	},
	  	function(identifier, profile, done) {

	  		// Extract openID
	  		var openId = identifier.substring(identifier.indexOf('id=')+3);
	  		var email = profile.emails[0].value;
	  		var username = email.substring(0, email.indexOf('@'));

	  		// Try to find user with current openId or email
	  		User.findOne({ "$or": [{openId: openId}, {email: email}] }, function(err, user) {
	  			if(!err && !user) {

	  				// Create new user
	  				user = new User({
	  					username: username,
	  					email: email,
	  					openId: openId,
	  					identifier: identifier,
	  					roles: ['USER']
	  				});

	  				// If user is me, set ADMIN rights
	  				if(email == "fradinni@gmail.com") {
	  					user.roles = ['ADMIN'];
	  					user.activated = true;
	  				}

	  				// Save new user
	  				user.save(function(saveErr) {
	  					done(saveErr, user);
	  				});

	  			} else {

	  				// If user already exists but openId has changed, update user
	  				if(email == user.email && openId != user.openId) {
	  					user.openId = openId;
	  					user.identifier = identifier;
	  					user.save(function(err) {
	  						done(err, user);
	  					});
	  				} else {
	  					done(err, user);
	  				}

	  			}
	  		});
	  	}
	));

	passport.serializeUser(function(user, done) {
  		done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
  		User.findById(id, function(err, user) {
    		done(err, user);
  		});
	});

	// Redirect the user to Google for authentication.  When complete, Google
	// will redirect the user back to the application at
	//     /auth/google/return
	app.get('/auth/google', passport.authenticate('google'));

	// Google will redirect the user to this URL after authentication.  Finish
	// the process by verifying the assertion.  If valid, the user will be
	// logged in.  Otherwise, authentication has failed.
	app.get('/auth/google/return', passport.authenticate('google'), function(req, res) {
		res.redirect('/blog');
	});


	//
	// Connect to database
	//
	console.log("[Database] Connection to MongoHQ...");
	mongoose.connect(process.env.MONGO_URL);


	//
	// Pre-compile ejs templates for client
	//
	var compiler = new EJSCompiler();
	compiler.compileTemplates(
		__dirname + '/www/templates/',
		__dirname + '/www/templates_compiled/'
	);


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
	// Auth function used by Express Roads to check if user is authenticated
	//
	var authFunction = function(req, res, next) {
		if(!req.user) {
			return res.redirect('/blog');
		} else {
			if(req.url.indexOf('/admin') == 0) {
				if(req.user.roles[0] == 'ADMIN') {
					return next();
				} else {
					return res.redirect('/blog');
				}
			} else {
				return next();
			}
		}
	};


	//
	// Initialize Express Roads
	//
	ExpressRoads.initialize(app, {
		baseDir: __dirname,
		routesDir: './routes',
		useAPI: true,
   		apiBaseDir: './routes/api',
		authFunction: authFunction,
		debug: true
	}, function() {

		//
		// Serve public directories
		//
		app.use('/css', express.static(__dirname + '/www/css'));
		app.use('/js', express.static(__dirname + '/www/js'));
		app.use('/img', express.static(__dirname + '/www/img'));
		app.use('/fonts', express.static(__dirname + '/www/fonts'));
		app.use('/ckeditor', express.static(__dirname + '/www/ckeditor'));

		// Serve compiled_templates as public templates directory for client
		app.use('/templates_compiled', express.static(__dirname + '/www/templates_compiled'));

		//
		// Start server...
		//
		http.createServer(/*https_options,*/app).listen(app.get('port'), function() {
			console.log("\n[Started] Backend is listening on : http://" + os.hostname().toLowerCase() + ":" + app.get('port'));
		});

	});


});
