import { state } from "../state";
import { endGame } from "../domManipulation/endGame";

export let checkWin = () => {
  let userHealth = state.user.health;
  let opponentHealth = state.opponent.health;
  if (opponentHealth <= 0 && userHealth <= 0) {
    endGame("Draw.");
  } else if (opponentHealth <= 0) {
    endGame("You win!");
  } else if (userHealth <= 0) {
    endGame("You lose...");
  }
};
