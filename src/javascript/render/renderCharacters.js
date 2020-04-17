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
      let attackBtn = document.createElement("button");
      attackBtn.setAttribute("id", "attack-btn");
      attackBtn.innerText = "Attack";

      attackBtn.addEventListener("click", () => {
        globalState.opponent.health =
          globalState.opponent.health - globalState.user.attack;

        globalState.user.health =
          globalState.user.health - globalState.opponent.attack;

        let userHealth = document.getElementById("user-health");
        userHealth.innerText = globalState.user.health;
        let opponentHealth = document.getElementById("opponent-health");
        opponentHealth.innerText = globalState.opponent.health;

        checkWin();
      });

      arena.appendChild(attackBtn);
      state.characterSelected = true;
      state.selected = state.selected + 1;
      console.log(character);
      globalState.user = character;
      document.getElementById("notification").innerHTML = "Choose an opponent";
    } else if (
      state.characterSelected &&
      !state.opponentSelected &&
      state.selected === 1
    ) {
      let arena = document.getElementById("arena");
      arena.appendChild(container);
      state.opponentSelected = true;
      state.selected = state.selected + 1;
      console.log(character);
      globalState.opponent = character;
      document.getElementById("notification").innerHTML =
        "Begin the duel! May the force be with you.";
      document.getElementById("all-characters").style.display = "none";
      createHealthBar();
    }
  });
};

let createHealthBar = () => {
  let healthBarsContainer = document.createElement("div");
  healthBarsContainer.setAttribute("class", "health-bars-container");
  document.getElementsByTagName("BODY")[0].appendChild(healthBarsContainer);

  let userHealthBar = document.createElement("div");
  userHealthBar.setAttribute("class", "health-bar");

  let usersHealth = document.createElement("p");
  usersHealth.innerHTML = `Your Health: `;

  let userHealthStatus = document.createElement("span");
  userHealthStatus.setAttribute("id", "user-health");
  userHealthStatus.innerHTML = globalState.user.health;
  usersHealth.appendChild(userHealthStatus);
  userHealthBar.appendChild(usersHealth);

  let opponentHealthBar = document.createElement("div");
  opponentHealthBar.setAttribute("class", "health-bar ");

  let opponentsHealth = document.createElement("p");
  opponentsHealth.innerHTML = `Opponent's Health: `;
  let opponentHealthStatus = document.createElement("span");
  opponentHealthStatus.setAttribute("id", "opponent-health");
  opponentHealthStatus.innerHTML = globalState.opponent.health;
  opponentsHealth.appendChild(opponentHealthStatus);
  opponentHealthBar.appendChild(opponentsHealth);

  healthBarsContainer.appendChild(userHealthBar);
  healthBarsContainer.appendChild(opponentHealthBar);
};

let checkWin = () => {
  let userHealth = globalState.user.health;
  let opponentHealth = globalState.opponent.health;
  if (opponentHealth <= 0 && userHealth <= 0) {
    clearArena("Draw.");
  } else if (opponentHealth <= 0) {
    clearArena("You win!");
  } else if (userHealth <= 0) {
    clearArena("You lose...");
  }
};

let clearArena = (message) => {
  let arena = document.getElementById("arena");
  arena.innerHTML = "";
  let status = document.createElement("h2");
  status.innerText = message;
  arena.appendChild(status);
};
