const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

// This middleware runs every time a request comes into the app
app.use(
  (req, res, next) => {
		req.message = 'This message made it!';
		console.log("One");
		const err = new Error('Oh no!!!');
		err.status = 500;
    // Pass control forward through the app
    next(err);
  },
  (req, res, next) => {
    console.log("One and half");
    console.log(req.message);
    next();
  }
);

// This middleware runs every time a request comes into the app
app.use((req, res, next) => {
	console.log('Two');
	next();
});




// When request is made to main url
app.get('/', (req, res) => {
	// Assign username cookie to a variable
	const name = req.cookies.username;
	// If there is a username cookie
	if (name) {
		// Display the index.pug template and pass it the name variable
		res.render("index", { name });
	} 
	// If no cookie
	else {
		// Redirect to /hello url
		res.redirect('/hello');
	}
});

app.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello');
});

// When a GET request is made to the /hello url
app.get('/hello', (req, res) => {
	// Assign username cookie to a variable
	const name = req.cookies.username;
	// If there is a username cookie, redirect to main page
	if (name) {
		res.redirect('/');
	} 
	// If no cookie, display the hello page template
	else {
		res.render('hello');
	}
});

// When a POST request is made to the /hello url
app.post('/hello', (req, res) => {
	// Create a cookie and send it to the client's browser
	// The value of the cookie is created from the form data
	// being sent with the POST request, which includes
	// a field value assigned a name property of 'username'
	// Using the cookie-parser middleware helps us access
	// that value within the req.body object being sent
	// with the request.
	res.cookie('username', req.body.username);
	// Redirect user to the main page
	res.redirect('/');
	// console.dir(req.body);
});

app.get('/cards', (req, res) => {
	res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is." });
});

// This middleware runs if no routes above match what was requested.
// Meaning it grabs all 404 errors and 
app.use((re, res, next) => {
	const err = new Error('Not found');
	err.status = 404;
	next();
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