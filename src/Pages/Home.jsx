import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { allWords } from "../Redux/Actions/actions.type";

const Home = () => {
  // const { nb }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let words = [];

  const goToGame = () => {
    navigate("/game");
  };

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
    <main>
      <div className="px-[10%] flex flex-col items-center mt-10 ">
        <h1 className="text-3xl underline mb-20">Le pendu !</h1>
        <p className="text-justify">
          Le but du jeu est simple : deviner toute les lettres qui doivent
          composer un mot, éventuellement avec un nombre limité de tentatives et
          des thèmes fixés à l’avance. A chaque fois que le joueur devine une
          lettre, celle-ci est affichée. Dans le cas contraire, le dessin d’un
          pendu se met à apparaître…
        </p>
        <img
          className="w-full max-w-[600px] h-auto mb-10"
          src="../../public/Le-Pendu.webp"
          alt="#"
        />

        <button
          onClick={goToGame}
          className="p-2 bg-rose rounded-md hover:shadow-md hover:text-white"
        >
          Venez tenter votre chance !
        </button>
      </div>
    </main>
  );
};

export default Home;
