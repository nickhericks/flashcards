const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

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
	res.cookie('username', req.body.username);
	// Redirect user to the main page
	res.redirect('/');
	// console.dir(req.body);
});

app.get('/cards', (req, res) => {
	res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is." });
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});