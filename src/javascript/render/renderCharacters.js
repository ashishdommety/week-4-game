let state = {
  characterNotSelected: true,
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
    if (state.characterNotSelected) {
      let arena = document.getElementById("arena");
      arena.appendChild(container);
      state.characterNotSelected = false;
      console.log(`You've selected ${character.name}`);
    } else {
      console.log(`You can't select another character.`);
    }
  });
};
