import { state } from "../state";
import { createHealthBars } from "../render/createHealthBars";
import { checkWin } from "../gameLogic/checkWin";

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
      enableAttacking();
    }
  }
};

let appendUser = (container, character) => {
  let arena = document.getElementById("arena");
  let battleGround = document.createElement("div");
  battleGround.setAttribute("id", "battle-ground");
  arena.appendChild(battleGround);

  battleGround.appendChild(container);

  updateState(character, "user");

  document.getElementById("notification").innerHTML = "Choose an opponent";
};

let appendOpponent = (container, character) => {
  let battleGround = document.getElementById("battle-ground");
  battleGround.append(container);

  updateState(character, "opponent");

  document.getElementById("notification").innerHTML =
    "Begin the duel! May the force be with you.";
  document.getElementById("all-characters").style.display = "none";
  createHealthBars();
};

let enableAttacking = () => {
  let attackBtn = createAttackBtn();
  attack(attackBtn);
  console.log(attackBtn);
  let arena = document.getElementById("arena");
  arena.append(attackBtn);
};

let createAttackBtn = () => {
  let attackBtn = document.createElement("button");
  attackBtn.setAttribute("id", "attack");
  attackBtn.innerText = "Attack";
  return attackBtn;
};

let attack = (btn) => {
  btn.addEventListener("click", () => {
    state.opponent.health = state.opponent.health - state.user.attack;

    state.user.health = state.user.health - state.opponent.attack;

    let userHealth = document.getElementById("user-health");
    userHealth.innerText = state.user.health;
    let opponentHealth = document.getElementById("opponent-health");
    opponentHealth.innerText = state.opponent.health;

    checkWin();
  });
};

let updateState = (character, type) => {
  state[type + "Selected"] = true;
  state.selected = state.selected + 1;
  state[type] = Object.assign({}, character);
};
