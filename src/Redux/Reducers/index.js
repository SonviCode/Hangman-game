import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import resultReducer from "./resultReducer";

export default combineReducers({
  gameReducer: gameReducer,
  resultReducer: resultReducer,
});
