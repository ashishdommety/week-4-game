import { enableAttacking } from "../gameLogic/enableAttacking";
import { createHealthBars } from "../render/createHealthBars";
import { updateState } from "../state/updateState";

export let appendOpponent = (container, character) => {
  let battleGround = document.getElementById("battle-ground");
  battleGround.append(container);

  updateState(character, "opponent");

  document.getElementById("notification").innerHTML =
    "Begin the duel! May the force be with you.";
  document.getElementById("all-characters").style.display = "none";
  enableAttacking();
  createHealthBars();
};
