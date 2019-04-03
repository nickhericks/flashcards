const express = require("express");
const router = express.Router();
const data = require('..data/flashcardData.json')

// This used to be for the '/cards' route but since
// in the app.js file we are using it as '/cards'
// the code below can just refer to the route as '/'
router.get("/", (req, res) => {
  res.render("card", {
    prompt: "Who is buried in Grant's tomb?",
    hint: "Think about whose tomb it is."
  });
});

module.exports = router;