import { createBattleGround } from "../render/createBattleGround";
import { updateState } from "../state/updateState";

export let appendUser = (container, character) => {
  let battleGround = createBattleGround();

  battleGround.appendChild(container);

  updateState(character, "user");

  document.getElementById("notification").innerHTML = "Choose an opponent";
};
