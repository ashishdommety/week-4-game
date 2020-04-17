import { state } from "../state";

export let createHealthBars = () => {
  let healthBarsContainer = document.createElement("div");
  healthBarsContainer.setAttribute("id", "health-bars-container");
  document.getElementsByTagName("BODY")[0].appendChild(healthBarsContainer);

  let userHealthBar = document.createElement("div");
  userHealthBar.setAttribute("class", "health-bar");

  let usersHealth = document.createElement("p");
  usersHealth.innerHTML = `Your Health: `;

  let userHealthStatus = document.createElement("span");
  userHealthStatus.setAttribute("id", "user-health");
  userHealthStatus.innerHTML = state.user.health;
  usersHealth.appendChild(userHealthStatus);
  userHealthBar.appendChild(usersHealth);

  let opponentHealthBar = document.createElement("div");
  opponentHealthBar.setAttribute("class", "health-bar ");

  let opponentsHealth = document.createElement("p");
  opponentsHealth.innerHTML = `Opponent's Health: `;
  let opponentHealthStatus = document.createElement("span");
  opponentHealthStatus.setAttribute("id", "opponent-health");
  opponentHealthStatus.innerHTML = state.opponent.health;
  opponentsHealth.appendChild(opponentHealthStatus);
  opponentHealthBar.appendChild(opponentsHealth);

  healthBarsContainer.appendChild(userHealthBar);
  healthBarsContainer.appendChild(opponentHealthBar);
};
