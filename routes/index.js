const express = require('express');
const router = express.Router();


// When request is made to main url
router.get('/', (req, res) => {
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

router.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello');
});

// When a GET request is made to the /hello url
router.get('/hello', (req, res) => {
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
router.post('/hello', (req, res) => {
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

// Export 'router' so it can be accessed by app.js
module.exports = router;