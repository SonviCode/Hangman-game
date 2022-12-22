import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectWord,
  addGame,
  resetLetter,
  resetGame,
} from "../Redux/Actions/actions.type";

const Modal = ({selectedWord, namePlayer }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { victoire } = useSelector((state) => state.resultReducer);

  const goToHome = () => {
    navigate("/");
    dispatch(selectWord(""));
    dispatch(resetGame());
    dispatch(resetLetter());
  };

  return (
    <div className="absolute top-0 left-0 h-full w-full z-40 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md p-20 z-50">
        <h2 className="w-max mb-5">
          {victoire
            ? `Bravo ${namePlayer} tu as gagné ! le mot était bien : ${selectedWord.toUpperCase()}`
            : `Oh non ${namePlayer}, tu as perdu ! le mot était : ${selectedWord.toUpperCase()}`}
        </h2>
        <button
          onClick={() => goToHome()}
          className="bg-rose rounded-md shadow-md p-2 hover:text-white"
        >
          Accueil
        </button>
      </div>
    </div>
  );
};

export default Modal;
