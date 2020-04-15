import { globalState } from "../state/index.js";

let state = {
  characterSelected: false,
  selected: 0,
  opponentSelected: false,
};

export const renderCharacters = (characters) => {
  let allCharacters = document.getElementById("all-characters");
  for (let i = 0; i < characters.length; i++) {
    renderCharacter(characters[i], allCharacters);
  }
};

let renderCharacter = (character, allCharacters) => {
  let container = document.createElement("div");
  container.setAttribute("class", "player char");
  container.setAttribute("data-user-name", character.name);

  let imageDiv = document.createElement("div");
  imageDiv.setAttribute("id", character.name.toLowerCase());
  imageDiv.setAttribute("class", `character ${character.side}`);

  container.appendChild(imageDiv);
  allCharacters.appendChild(container);
  addEvents(character, container);
};

let addEvents = (character, container) => {
  container.addEventListener("click", function () {
    if (
      !state.characterSelected &&
      !state.opponentSelected &&
      state.selected === 0
    ) {
      let arena = document.getElementById("arena");
      arena.appendChild(container);
      state.characterSelected = true;
      state.selected = state.selected + 1;
      console.log(`You've selected ${character.name}`);
      globalState.user = character;
    } else if (
      state.characterSelected &&
      !state.opponentSelected &&
      state.selected === 1
    ) {
      let arena = document.getElementById("arena");
      arena.appendChild(container);
      state.opponentSelected = true;
      state.selected = state.selected + 1;
      console.log(`You've selected ${character.name} as an opponent.`);
      globalState.opponent = character;
    }
  });
  console.log(state);
};
