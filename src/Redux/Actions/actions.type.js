
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
  RESET_RESULT,
  RESET_PLAYER,
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
};
export const resetPlayer = () => {
  return { type: RESET_PLAYER };
};

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
export const resetResult = () => {
  return { type: RESET_RESULT };
};
