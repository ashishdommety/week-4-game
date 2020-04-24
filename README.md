# Star Wars RPG

This is a simple star wars game.

Select a character, select an opponent and fight.
Each character has a different health and attack setting.

## :nut_and_bolt: Technologies 
I built this project using Webpack, Babel, and Vanilla JS. It was previously build with jQuery, but I decided to re-factor it for fun.

## :bulb: Thinking
To break this project down, I decided to organize my javascript directories in the following manner:

1. **domManipulation** : functions to manipulate and move elements on the DOM
2. **render**: functions to render new elements for the first time an append them to the DOM
3. **state**: functions that initialize and mutate the state
4. **gameLogic**: functions that check state and call upon the other functions if there is a win, loss or draw.
5. **constructors**: Classes (in this case, just to construct character objects) that generate objects that are used and copied into state as needed.

Each of these directories contain single function files that are responsible for one thing only.

The entry point for the whole application is **main.js**.

