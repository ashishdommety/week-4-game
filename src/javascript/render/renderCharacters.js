export const renderCharacters = (characters) => {
  let allCharacters = document.getElementById("all-characters");
  for (let i = 0; i < characters.length; i++) {
    let container = document.createElement("div");
    container.setAttribute("class", "player char");
    container.setAttribute("data-user-name", characters[i].name);

    let character = document.createElement("p");
    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("id", characters[i].name.toLowerCase());
    imageDiv.setAttribute("class", `character ${characters[i].side}`);
    let name = document.createTextNode(characters[i].name);

    character.appendChild(name);
    container.appendChild(character);
    container.appendChild(imageDiv);
    allCharacters.appendChild(container);
  }
};
