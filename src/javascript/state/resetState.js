import { state } from "./index";

export let resetState = () => {
  state.user = {};
  state.opponent = {};
  state.userSelected = false;
  state.selected = 0;
  state.opponentSelected = false;
};
