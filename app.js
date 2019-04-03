const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

// // This middleware runs every time a request comes into the app
// app.use(
//   (req, res, next) => {
// 		req.message = 'This message made it!';
// 		console.log("One");
//     // Pass control forward through the app
//     next();
//   },
//   (req, res, next) => {
//     console.log("One and half");
//     console.log(req.message);
//     next();
//   }
// );

// // This middleware runs every time a request comes into the app
// app.use((req, res, next) => {
// 	console.log('Two');
// 	next();
// });

// Import code from index.js file in the 'routes' folder
const routes = require('./routes')
// Use code in the index.js file
app.use(routes);



// This middleware runs if no routes above match what was requested.
// Meaning it grabs all 404 errors and passes them to
app.use((req, res, next) => {
	const err = new Error('Not found');
	err.status = 404;
	next(err);
});

// Error Handling Middleware (4 parameters)
// Runs if an object gets passed into a next() call
app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});


app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});