var express = require('express');
var browserify = require('browserify-middleware');
var less = require('less-middleware');
var nunjucks = require('nunjucks');
var config = require('../client/config');
var mysql = require('mysql');

// initialise express
var app = express();


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'inventory'
});
connection.connect(function (err) {
	if (!err) {
		console.log("Database is connected ...");



		var username = "Mohsin";
		connection.query('INSERT INTO data (name) VALUES (?)', [username], function (err, result, fields) {
			if (err) {
				console.log(err);
			}
			if (result) {
				console.log("Data inserted!");
			}
		});


		connection.query('SELECT name FROM data WHERE name = ?', [username], function (err, result, fields) {
			if (err){ console.log(err)};
			console.log(result[0].name);

			app.locals.username = result[0].name;

		});



	} else {
		console.log("Error connecting database ... ");
		console.log(err);

	}
});





// use nunjucks to process view templates in express
	nunjucks.configure('server/templates/views', {
		express: app
	});

// less will automatically compile matching requests for .css files
	app.use(less('public'));
// public assets are served before any dynamic requests
	app.use(express.static('public'));

// common packages are precompiled on server start and cached
	app.get('/js/' + config.common.bundle, browserify(config.common.packages, {
		cache: true,
		precompile: true
	}));

app.use(function (req,res,next) {

	res.locals.username = app.locals.username;

	next();
});

// any file in /client/scripts will automatically be browserified,
// excluding common packages.
	app.use('/js', browserify('./client/scripts', {
		external: config.common.packages,
		transform: ['babelify']
	}));

	/*
        set up any additional server routes (api endpoints, static pages, etc.)
        here before the catch-all route for index.html below.
    */

	app.get('*', function (req, res) {
		// this route will respond to all requests with the contents of your index
		// template. Doing this allows react-router to render the view in the app.
		res.render('index.html');
	});

// start the server
	var server = app.listen(process.env.PORT || 8000, function () {
		console.log('\nServer ready on port %d\n', server.address().port);
	});
