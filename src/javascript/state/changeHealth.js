import { state } from "./index";

export let changeHealth = () => {
  state.opponent.health = state.opponent.health - state.user.attack;
  state.user.health = state.user.health - state.opponent.attack;
};
