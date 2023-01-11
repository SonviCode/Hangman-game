import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Game from "./Pages/Game";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import { useDispatch } from "react-redux";
import axios from "axios";
import { allWords } from "./Redux/Actions/actions.type";
import { React, useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  let words = [];

  const fetchingJson = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/nmondon/mots-frequents/master/data/frequence.json"
      )
      .then((res) => {
        res.data.map((item) => {
          words.push(item.label);
        });

        dispatch(allWords(words));
      });
  };

  useEffect(() => {
    fetchingJson();
  }, []);

  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
