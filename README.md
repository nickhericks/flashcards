# Express application with Pug templating - Full Stack JavaScript Techdegree

### Flash Cards application
This project is built using the Express web framework and the Pug templating engine to create a flash cards application.

***
<!-- <img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1550234182/portfolio/interactive-form-1.png" width="400px"><img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1550218646/portfolio/screenshot-padding-github.png" width="50px">
<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1550234182/portfolio/interactive-form-2.png" width="400px"> -->

## View project
:mag: Live version available at [nickhericks.github.io/flashcards/](https://nickhericks.github.io/flashcards/)

## Project objective
<!-- To complete this project I created JavaScript classes (Game, Board, Space, Player, Token) to organize the code. Each class, with its constructor function, methods, getters and setters is in its own .js file, and the app.js file handles the interaction with DOM elements. -->

## Techniques and concepts
- Express web framework
- Pug templating engine

## Code example
<!-- ```javascript
// Finds Space object to drop Token into, and drops Token.
playToken(){
  let spaces = this.board.spaces;
  let activeToken = this.activePlayer.activeToken;
  let targetColumn = spaces[activeToken.columnLocation];
  let targetSpace = null;
  //
  for(let space of targetColumn) {
    if(space.token === null) {
      targetSpace = space;
    }
  }

  if(targetSpace !== null) {
    const game = this;
    game.ready = false;
    activeToken.drop(targetSpace, function() {
      game.updateGameState(activeToken, targetSpace);
    });
  }
}
``` -->

## Acknowledgements
This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:
