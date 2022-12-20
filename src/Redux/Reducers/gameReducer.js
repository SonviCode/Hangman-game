import {
  SELECT_WORD,
  SELECT_LETTER,
  ALL_WORDS,
  ERROR,
  NAME_PLAYER,
  RESET_LETTER,
  RESET_PLAYER,
} from "../Constants/actions";

const initialState = {
  wordArr: [],
  selectedWord: "",
  nbError: 0,
  letterArr: [],
  playerArr: [],
  namePlayer: "",
};

const gameReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_WORDS:
      return {
        ...state,
        wordArr: action.value,
      };
    case SELECT_WORD:
      return {
        ...state,
        selectedWord: action.value,
      };

    case ERROR:
      return {
        ...state,
        nbError: state.nbError + 1,
      };

    case RESET_LETTER:
      return {
        ...state,
        letterArr: [],
        nbError: 0,
      };

    case SELECT_LETTER:
      return {
        ...state,
        letterArr: [...state.letterArr, action.value],
      };

    case NAME_PLAYER:
      return {
        ...state,
        namePlayer: action.value,
        playerArr: [...state.playerArr, action.value],
      };

    case RESET_PLAYER:
      return {
        ...state,
        playerArr: [],
      };

    default:
      return state;
  }
};

export default gameReducer;
