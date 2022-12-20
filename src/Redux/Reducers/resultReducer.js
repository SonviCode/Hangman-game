import { ADD_GAME, ADD_LOOSE, ADD_VICTORY, RESET_RESULT } from "../Constants/actions";

const initialState = {
  nbGame: 0,
  nbVictory: 0,
  nbLoose: 0,
  victoire: false,
  defaite: false,
};

const resultReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        defaite: false,
        victoire: false,
        nbGame: state.nbGame + 1,
      };
    case ADD_LOOSE:
      return {
        ...state,
        defaite: true,
        nbLoose: state.nbLoose + 1,
      };
    case ADD_VICTORY:
      return {
        ...state,
        victoire: true,
        nbVictory: state.nbVictory + 1,
      };
    case RESET_RESULT:
      return {
        ...state,
        nbGame: 0,
        nbVictory: 0,
        nbLoose: 0,
        victoire: false,
        defaite: false,
      };
    default:
      return state;
  }
};

export default resultReducer;
