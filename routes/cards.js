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

	const otherSide = (side === 'question') ? 'answer' : 'question';
	
	// Put the text variable in an object
	// that can be passed into the template
	const templateData = { text, hint, id, side, otherSide };

	// Only display the hint if the 'question' side
	// is requested, not when 'answer' side is requested
	// if (side === 'question'){
	// 	templateData.hint = hint;
	// }

  res.render('card', templateData);
});

module.exports = router;