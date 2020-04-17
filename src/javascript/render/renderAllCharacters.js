import { renderOneCharacter } from "./renderOneCharacter";

export const renderAllCharacters = (characters) => {
  let allCharacters = document.getElementById("all-characters");
  for (let i = 0; i < characters.length; i++) {
    renderOneCharacter(characters[i], allCharacters);
  }
};
