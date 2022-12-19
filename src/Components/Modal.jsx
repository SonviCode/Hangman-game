import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
  selectWord,
  addGame,
  resetLetter,
} from "../Redux/Actions/actions.type";

const Modal = ({ victoire, selectedWord }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToHome = () => {
    navigate("/");
    dispatch(selectWord(""));
    dispatch(addGame());
    dispatch(resetLetter());
  };

  console.log(victoire);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md p-20">
      <h2 className="w-max mb-5">
        {victoire
          ? "Bravo tu as gagné !"
          : `Oh non, tu as perdu ! le mot était : ${selectedWord}`}
      </h2>
      <button
        onClick={() => goToHome()}
        className="bg-rose rounded-md shadow-md p-2 hover:text-white"
      >
        Accueil
      </button>
    </div>
  );
};

export default Modal;
