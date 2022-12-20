// import { SELECT_LETTER } from "../Constants/actions";
// import { error, selectLetter, addLoose } from "../Actions/actions.type";

// const customMiddleware = (store) => (next) => (action) => {
//   const state = store.getState();
//   const dispatch = store.dispatch;

//   const selectedWord = state.gameReducer.selectedWord;
//   // const letterArr = state.gameReducer.letterUsed;
//   const nbError = state.gameReducer.nbError;
//   const nbLoose = state.resultReducer.nbLoose;

//   // -------When we select a letter----
//   if (action.type === SELECT_LETTER) {
//     if (!selectedWord.includes(action.value)) {
//       dispatch(error());

//       console.log(action.value);
//     } 
//      if (nbError === 8) {
//       dispatch(addLoose());
//       console.log(nbLoose);
//       console.log("la partie est perdue mon p'tit pote");
//     }
//   }
  
//   return next(action);
// };

// export default customMiddleware;
