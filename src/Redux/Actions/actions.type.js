
import {
  SELECT_WORD,
  SELECT_LETTER,
  ALL_WORDS,
  ERROR,
  ADD_GAME,
  ADD_VICTORY,
  ADD_LOOSE,
  NAME_PLAYER,
  RESET_LETTER,
} from "../Constants/actions";

//------GAME

export const selectWord = (value) => {
  return { type: SELECT_WORD, value: value };
};
export const selectLetter = (value) => {
  return { type: SELECT_LETTER, value: value };
};
export const allWords = (value) => {
  return { type: ALL_WORDS, value: value };
};
export const error = () => {
  return { type: ERROR };
};

export const newNamePlayer = (value) => {
  return { type: NAME_PLAYER, value: value };
};

export const resetLetter = () => {
  return { type: RESET_LETTER };
};// arrete de tout casser tom 

//----RESULT

export const addGame = () => {
  return { type: ADD_GAME };
};
export const addLoose = () => {
  return { type: ADD_LOOSE };
};
export const addVictory = () => {
  return { type: ADD_VICTORY };
};
