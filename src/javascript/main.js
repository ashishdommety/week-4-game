import { characters } from "./characterConstructor";
import { renderAllCharacters } from "./render/renderAllCharacters";

export const createCharacters = () => {
  renderAllCharacters(characters);
};
