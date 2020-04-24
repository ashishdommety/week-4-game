import { state } from "../state";
import { appendUser } from "./appendUser";
import { appendOpponent } from "./appendOpponent";

export let selectCharacters = (character, container) => {
  container.addEventListener("click", selectionLogic);

  function selectionLogic(e) {
    if (
      !state.userSelected &&
      !state.opponentSelected &&
      state.selected === 0
    ) {
      appendUser(e.target, character);
    } else if (
      state.userSelected &&
      !state.opponentSelected &&
      state.selected === 1
    ) {
      appendOpponent(e.target, character);
    }
  }
};
