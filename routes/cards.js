const express = require("express");
const router = express.Router();
// const data = require("..data/flashcardData.json").data;
const { data } = require('../data/flashcardData.json')
// const cards = data.cards;
const { cards } = data;

// This used to be for the '/cards' route but since
// in the app.js file we are using it as '/cards'
// the code below can just refer to the route as '/'
router.get("/:id", (req, res) => {
	// If a query string was sent with the request
	// that includes a 'side' key, assign it to a variable
	const side = req.query.side;
	// Access id from the route parameter and assign it a variable
	const id = req.params.id;
	// Use the id variable as the index of the card
	// and the side variable to choose the
	// property name of 'question' or 'answer'
	// and assign it to a variable
	const text = cards[id][side];
	// Store a reference to the hint as a variable
	const hint = cards[id].hint;

	// Put the text variable in an object
	// that can be passed into the template
	const templateData = { id, text };

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

module.exports = router;