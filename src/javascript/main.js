import { characters } from "./createCharacters";
import { renderCharacters } from "./render/renderCharacters";

export const createCharacters = () => {
  renderCharacters(characters);
};
