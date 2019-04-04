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
	const { side } = req.query;

  res.render("card", {
    prompt: cards[req.params.id].question,
    hint: cards[req.params.id].hint
  });
});

module.exports = router;