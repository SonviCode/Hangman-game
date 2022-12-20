import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reducer from "./Redux/Reducers/index";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import "./styles/index.css";
import { save, load } from "redux-localstorage-simple";
// import customMiddleware from "./Redux/Middlewares/customMiddleware";

const createStoreWithMiddleware = applyMiddleware(
  save({
    // states: ["reducerDragon.dragon", "reducerKnight.knight"],
  }),
  // customMiddleware
)(createStore);

const store = createStoreWithMiddleware(
  reducer,
  load({
    // states: ["reducerDragon.dragon", "reducerKnight.knight"],
  }) // Loading done here
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
