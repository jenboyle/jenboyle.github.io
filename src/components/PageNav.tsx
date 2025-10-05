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
      <ul className={styles.navmain} onClick={handleNavChange}>
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
          <NavLink to="/jam_time" onClick={hideExcess}>
            Jam Time
          </NavLink>
        </li>

        <li>
          <div className={styles.bassIcon} onClick={handleNavExcess}>
            {showNavExcess ? <CgClose /> : <GiGuitarBassHead />}
          </div>
        </li>
      </ul>
      {showNavExcess && (
        <div className={styles.overlay}>
          <ul onClick={handleNavChange} className={styles.excessnav}>
            <li onClick={hideExcess}>
              <NavLink to="/about_me">About Me</NavLink>
            </li>
            <li onClick={hideExcess}>
              <NavLink reloadDocument to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li onClick={hideExcess}>
              <NavLink to="/cubase">Cubase</NavLink>
            </li>
            <li onClick={hideExcess}>
              <NavLink reloadDocument to="/games">
                Games
              </NavLink>
            </li>
            <li onClick={hideExcess}>
              <NavLink to="/my_gear">Gear</NavLink>
            </li>
            <li onClick={hideExcess}>
              <NavLink to="/groovy_designs">Groovy Designs</NavLink>
            </li>
            <li onClick={hideExcess}>
              <NavLink to="/groovy_nail_designer">Groovy Nail Designer</NavLink>
            </li>
            <li onClick={hideExcess}>
              <NavLink to="/improvisation">Improvisation</NavLink>
            </li>
            <li onClick={hideExcess}>
              <NavLink to="/keys">Keys</NavLink>
            </li>

            <li onClick={hideExcess}>
              <NavLink to="/my_content">My Content</NavLink>
            </li>
            <li onClick={hideExcess}>
              <NavLink to="/percussion">Percussion</NavLink>
            </li>
            <li onClick={hideExcess}>
              <NavLink to="/practice_plan">Practice Plan</NavLink>
            </li>
            <li onClick={hideExcess}>
              <NavLink to="/tips">Tips</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
export default PageNav;
