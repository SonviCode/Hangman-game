import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Components/Modal";
import {
  addGame,
  addLoose,
  addVictory,
  error,
  newNamePlayer,
  selectLetter,
  selectWord,
} from "../Redux/Actions/actions.type";

const Game = () => {
  const { selectedWord, letterArr, nbError, wordArr, namePlayer } = useSelector(
    (state) => state.gameReducer
  );
  const { victoire, defaite } = useSelector((state) => state.resultReducer);

  const dispatch = useDispatch();

  let formatSelectedWord = [];
  let alphabet = [];

  let checker = (arr, target) => target.every((e) => arr.includes(e));

  const sansAccents = (str) => {
    const s = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return s;
  };

  const handleLetter = (el) => {
    dispatch(selectLetter(el));

    if (!selectedWord.includes(el)) {
      dispatch(error());

      if (nbError === 7) {
        dispatch(addLoose());
      }
    }
  };

  useEffect(() => {
    if (
      checker(letterArr, selectedWord.split("")) == true &&
      selectedWord !== ""
    ) {
      dispatch(addVictory());
    }
  }, [letterArr]);

  if (selectedWord !== "") {
    formatSelectedWord = selectedWord.split("");
    alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectNamePlayer = e.target.elements.name.value.toUpperCase();

    if (selectNamePlayer.trim() == "") {
      alert("N'oublie pas ton nom !");
      return;
    }

    dispatch(newNamePlayer(selectNamePlayer));

    const rndInt = Math.floor(Math.random() * wordArr.length) + 1;
    dispatch(selectWord(sansAccents(wordArr[rndInt])));
    dispatch(addGame());
  };

  return (
    <main>
      <div className="px-[10%] mt-10 text-center flex flex-col items-center">
        {victoire == true ? (
          <Modal victoire={victoire} namePlayer={namePlayer} />
        ) : null}
        {defaite == true ? (
          <Modal selectedWord={selectedWord} namePlayer={namePlayer} />
        ) : null}
        {selectedWord == null ? (
          ""
        ) : (
          <img
            src={`../../public/${nbError}.jpg`}
            className="w-full max-w-[200px] h-auto mb-10"
            alt="nombre de vie"
          />
        )}
        <div>
          <ul className="flex gap-1">
            {formatSelectedWord.map((elWord, index) => {
              if (letterArr.includes(elWord)) {
                return (
                  <li
                    className="w-10 h-10 flex justify-center items-center bg-rose cursor-pointer uppercase"
                    key={index}
                  >
                    {elWord}
                  </li>
                );
              } else {
                return (
                  <li
                    className="w-10 h-10 flex justify-center items-center bg-rose cursor-pointer uppercase"
                    key={index}
                  >
                    _
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <ul className="flex flex-wrap gap-5 justify-center items-center my-10">
          {alphabet.map((el, index) => {
            if (letterArr.includes(el)) {
              return (
                <li
                  className="w-20 h-10 flex justify-center items-center bg-gray-100 cursor-pointer uppercase"
                  key={index}
                >
                  {el}
                </li>
              );
            } else {
              return (
                <li
                  onClick={() => handleLetter(el)}
                  className="w-20 h-10 flex justify-center items-center bg-blue-200 cursor-pointer uppercase"
                  key={index}
                >
                  {el}
                </li>
              );
            }
          })}
        </ul>

        {selectedWord == "" ? (
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col text-left">
              <label htmlFor="name"> Nom du joueur</label>
              <input
                type="text"
                id="name"
                style={{textTransform: "uppercase"}}
                className="shadow-md rounded-md border-black border-2 p-2"
                
              />
            </div>
            <button className="p-2 bg-rose rounded-md hover:shadow-md hover:text-white">
              Lancer la partie
            </button>
          </form>
        ) : (
          <p className="text-left relative left-0">
            Nom du joueur : {namePlayer}
          </p>
        )}
      </div>
    </main>
  );
};

export default Game;
