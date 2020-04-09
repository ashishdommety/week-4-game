import { characters } from "./characterConstructor";
import { renderCharacters } from "./render/renderCharacters";
import { selectCharacter } from "./domManipulation/selectCharacter";

export const createCharacters = () => {
  renderCharacters(characters);
};

export const selectOneCharacter = () => {
  selectCharacter();
};
