export let createBattleGround = () => {
  let arena = document.getElementById("arena");
  let battleGround = document.createElement("div");
  battleGround.setAttribute("id", "battle-ground");
  arena.appendChild(battleGround);
  return battleGround;
};
