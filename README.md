# Express application with Pug templating - Full Stack JavaScript Techdegree

### Flash Cards application
This project is built using the Express web framework and the Pug templating engine to create a flash cards application.

***
<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1554483544/portfolio/expressFlashcards.png" width="500px">

## View project
<!-- :mag: Live version available at [nickhericks.github.io/flashcards/](https://nickhericks.github.io/flashcards/) -->

## Project objective
<!-- To complete this project I created JavaScript classes (Game, Board, Space, Player, Token) to organize the code. Each class, with its constructor function, methods, getters and setters is in its own .js file, and the app.js file handles the interaction with DOM elements. -->

## Techniques and concepts
- Express web framework
- Pug templating engine

## Code example
```javascript
const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/cards', (req, res) => {
	res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is." });
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});
```

## Acknowledgements
This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:
