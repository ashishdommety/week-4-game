import { createAttackBtn } from "../render/createAttackBtn";
import { addAttackEvent } from "../domManipulation/addAttackEvent";

export let enableAttacking = () => {
  let attackBtn = createAttackBtn();
  addAttackEvent(attackBtn);
  let arena = document.getElementById("arena");
  arena.append(attackBtn);
};
