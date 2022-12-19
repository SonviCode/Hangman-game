import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const { nbGame, nbVictory, nbLoose } = useSelector(
    (state) => state.resultReducer
  );
  const { playerArr } = useSelector((state) => state.gameReducer);

  let newArrayPlayer = [];

  playerArr.map((el) => {
    newArrayPlayer.push(el.toUpperCase())
  })

  return (
    <div>
      <main>
        <div className="px-[10%] flex flex-col mt-10 ">
          <h1 className="text-3xl underline mb-20 text-center">Page des resultats :</h1>
          <h2>Noms des participants :</h2>
          <ul className="border border-gray-200 rounded overflow-hidden shadow-md w-full relative mb-20">
            {newArrayPlayer.sort().map((el, index) => {
              return (
                <li
                  className="px-4 py-2 bg-white w-full hover:bg-blue-100 hover:text-rose border-b last:border-none border-blue-200 transition-all duration-300 ease-in-out  flex items-center"
                  key={index}
                >
                  {el}
                </li>
              );
            })}
          </ul>
          <ul className="shadow-md p-10 rounded-md flex flex-col gap-10 justify-center mb-20">
            <li>
              Nombre de partie : <span className="text-rose">{nbGame}</span>
            </li>
            <li>
              Nombre de victoire :{" "}
              <span className="text-rose">{nbVictory}</span>
            </li>
            <li>
              Nombre de défaite : <span className="text-rose">{nbLoose}</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Result;
