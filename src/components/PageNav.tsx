import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import { CgClose } from "react-icons/cg";
import { GiGuitarBassHead } from "react-icons/gi";
// import { LuListMusic } from "react-icons/lu";
import { useState } from "react";
import { useTool } from "../context/ToolContext";

function PageNav() {
  const [showNavExcess, setShowNavExcess] = useState(false);
  const { dronePlaying, toggleDronePlaying } = useTool();

  function handleNavExcess() {
    setShowNavExcess(!showNavExcess);
  }

  function handleNavChange() {
    if (dronePlaying) {
      toggleDronePlaying();
    }
  }

  function hideExcess() {
    setShowNavExcess(false);
  }
  return (
    <nav className={styles.nav}>
      <ul onClick={handleNavChange}>
        <li>
          <NavLink reloadDocument to="/" onClick={hideExcess}>
            Bass Theory
          </NavLink>
        </li>
        <li>
          <NavLink to="/transcriptions" onClick={hideExcess}>
            Transcriptions
          </NavLink>
        </li>

        <li>
          <NavLink to="/improvisation" onClick={hideExcess}>
            Improvisation
          </NavLink>
        </li>
        <li>
          <NavLink to="/my_gear" onClick={hideExcess}>
            Gear
          </NavLink>
        </li>

        <li>
          <NavLink to="/jam_time" onClick={hideExcess}>
            Jam Time
          </NavLink>
        </li>
        <li>
          <NavLink to="/cubase" onClick={hideExcess}>
            Cubase
          </NavLink>
        </li>

        <li>
          <NavLink reloadDocument to="/games" onClick={hideExcess}>
            Games
          </NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/blogs" onClick={hideExcess}>
            Blogs
          </NavLink>
        </li>
        <li>
          {showNavExcess ? (
            <CgClose onClick={handleNavExcess} />
          ) : (
            <GiGuitarBassHead onClick={handleNavExcess} />
          )}
        </li>
      </ul>
      {showNavExcess && (
        <ul onClick={handleNavChange} className={styles.excessnav}>
          <li onClick={hideExcess}>
            <NavLink to="/about_me">About Me</NavLink>
          </li>
          <li onClick={hideExcess}>
            <NavLink to="/percussion">Percussion</NavLink>
          </li>
          <li onClick={hideExcess}>
            <NavLink to="/tips">Tips</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
export default PageNav;
