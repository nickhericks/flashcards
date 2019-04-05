const express = require("express");
const router = express.Router();
// const data = require("..data/flashcardData.json").data;
const { data } = require('../data/flashcardData.json')
// const cards = data.cards;
const { cards } = data;


// Run route for when user requests localhost:3000/cards
// that picks a random flashcard id and creates a redirect 
// that uses that id to make a random card to display
router.get('/', (req, res) => {
	// Get total number of flashcards from flashcardData.json file
	const numberOfCards = cards.length;
	// Generate random number from 0 to numberOfCards
	const flashcardId = Math.floor(Math.random() * numberOfCards);
	// 
	res.redirect(`/cards/${flashcardId}`);
});


// Run when requested route includes an id after /cards/__
router.get("/:id", (req, res) => {

	// If a query string was sent with the request
	// that includes a 'side' key, assign it to a variable
	const side = req.query.side;
	// Access id from the route parameter and assign it a variable
	const id = req.params.id;

	// If side not provided in query string, set it to question
	// and redirect back to this same route with the query string included
	if ( !side ) {
		return res.redirect(`/cards/${id}?side=question`)
	}


	const name = req.cookies.username

	// Use the id variable as the index of the card
	// and the side variable to choose the
	// property name of 'question' or 'answer'
	// and assign it to a variable
	const text = cards[id][side];
	// Store a reference to the hint as a variable
	const hint = cards[id].hint;

	// Put the text variable in an object
	// that can be passed into the template
	const templateData = { id, text, name, side };

	// If the 'question' side is requested,
	// create a 'hint' property so that it can be displayed
	// and also create/assign new properties related to link
	if (side === 'question'){
		templateData.hint = hint;
		templateData.sideToShow = 'answer';
		templateData.sideToShowDisplay = 'Answer';
	} 
	// If the 'answer' side is requested,
	// no 'hint' property is created since we don't want to show it.
	// Also create/assign new properties related to link
	else if (side === 'answer') {
		templateData.sideToShow = 'question';
		templateData.sideToShowDisplay = 'Question';
	}

  res.render('card', templateData);
});

// Export 'router' so it can be accessed by app.js
module.exports = router;