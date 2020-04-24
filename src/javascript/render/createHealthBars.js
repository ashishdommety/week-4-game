import { state } from "../state";

export let createHealthBars = () => {
  createHealthBar("user");
  createHealthBar("opponent");
};

let createHealthBar = (characterType) => {
  let elem = document.createElement("span");
  elem.setAttribute("id", `${characterType}-health`);
  elem.setAttribute("class", "character-health");
  elem.innerText = state[characterType].health;
  let name = state[characterType].name.toLowerCase();
  let character = document.getElementById(name);
  character.append(elem);
};
