import { characters } from "./constructors";
import { renderAllCharacters } from "./render/renderAllCharacters";

export const createCharacters = () => {
  renderAllCharacters(characters);
};
