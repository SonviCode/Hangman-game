import { NavLink } from "react-router-dom";

const Nav = () => {
  const checkIsActive = ({ isActive }) => {
    return {
      color: isActive ? '#FFB0CB' : "black",
    };
  };

  return (
    <nav className="w-full shadow-md">
      <ul className="flex justify-around py-5 uppercase">
        <li>
          <NavLink style={checkIsActive} to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsActive} to="/game">
            Jeu
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsActive} to="/result">
            Résultat
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
