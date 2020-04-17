import { resetGame } from "../gameLogic/resetGame";
import { clearArena } from "./clearArena";

export let endGame = (message) => {
  clearArena();
  let arena = document.getElementById("arena");
  let status = document.createElement("h2");
  status.innerText = message;
  let resetBtn = document.createElement("button");
  resetBtn.innerText = "Reset";
  resetBtn.addEventListener("click", () => {
    resetGame();
  });
  arena.appendChild(status);
  arena.appendChild(resetBtn);
};
