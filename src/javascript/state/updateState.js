import { state } from "./index";

export let updateState = (character, type) => {
  state[type + "Selected"] = true;
  state.selected = state.selected + 1;
  state[type] = Object.assign({}, character);
};
