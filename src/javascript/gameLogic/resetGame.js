import { renderOneCharacter } from "../render/renderOneCharacter";
import { characters } from "../characterConstructor";
import { clearArena } from "../domManipulation/clearArena";
import { resetState } from "../state/resetState";

export let resetGame = () => {
  let allCharacters = document.getElementById("all-characters");
  allCharacters.innerHTML = "";
  allCharacters.style.display = "flex";
  for (let i = 0; i < characters.length; i++) {
    renderOneCharacter(characters[i], allCharacters);
  }
  clearArena();
  resetState();
};
