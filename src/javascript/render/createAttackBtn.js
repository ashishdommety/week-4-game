export let createAttackBtn = () => {
  let attackBtn = document.createElement("button");
  attackBtn.setAttribute("id", "attack");
  attackBtn.innerText = "Fight";
  return attackBtn;
};
