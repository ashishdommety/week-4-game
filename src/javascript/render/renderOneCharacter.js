import { selectCharacters } from "../domManipulation/selectCharacters";

export let renderOneCharacter = (character, allCharacters) => {
  let container = document.createElement("div");
  container.setAttribute("class", "player char");
  container.setAttribute("data-user-name", character.name);

  let imageDiv = document.createElement("div");
  imageDiv.setAttribute("id", character.name.toLowerCase());
  imageDiv.setAttribute("class", `character ${character.side}`);

  container.appendChild(imageDiv);
  allCharacters.appendChild(container);
  selectCharacters(character, container);
};
