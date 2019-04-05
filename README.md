# Express application with Pug templating - Full Stack JavaScript Techdegree

### Flash Cards application
This project is built using the Express web framework and the Pug templating engine to create a flash cards application.

***
<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1554483544/portfolio/expressFlashcards.png" width="500px">

## To view project
1. Download project.
2. Run 'npm install' in the command line.
3. Run 'npm start' in the command line.
4. Go to 'localhost:3000' in your browser.

## Project objective
This project was built as I was learning about the Express web framework and the Pug templating engine. Through this project I learned about the request and response objects, body-parser, routes, templates, middleware, cookies (cookie-parser) redirects, error handling, modularizing routes, route parameters and query strings, serving static assets with a static server, and much more. :)

## Techniques and concepts
- Express web framework
- Pug templating engine

## Code example
```javascript
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
```

## Acknowledgements
This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:
