import { changeHealth } from "../state/changeHealth";
import { checkWin } from "../gameLogic/checkWin";
import { state } from "../state";

export let addAttackEvent = (btn) => {
  btn.addEventListener("click", () => {
    changeHealth();
    let userHealth = document.getElementById("user-health");
    userHealth.innerText = state.user.health;
    let opponentHealth = document.getElementById("opponent-health");
    opponentHealth.innerText = state.opponent.health;

    checkWin();
  });
};
