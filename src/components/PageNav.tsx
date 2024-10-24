import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import { IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react";
import { useTool } from "../context/ToolContext";
//function PageNav({ stopDronePlay }) {
function PageNav() {
  const [showNavExcess, setShowNavExcess] = useState(false);
  const { dronePlaying, toggleDronePlaying } = useTool();

  function handleNavExcess() {
    setShowNavExcess(!showNavExcess);
    //onDronePlay(false);
  }

  function handleNavChange() {
    //console.log("yea");
    if (dronePlaying) {
      toggleDronePlaying();
    }
    //stopDronePlay();
  }

  function hideExcess() {
    setShowNavExcess(false);
  }
  return (
    <nav className={styles.nav}>
      <ul onClick={handleNavChange}>
        <li>
          <NavLink reloadDocument to="/">
            Bass Theory
          </NavLink>
        </li>
        <li>
          <NavLink to="/transcriptions">Transcriptions</NavLink>
        </li>

        <li>
          <NavLink to="/improvisation">Improvisation</NavLink>
        </li>
        <li>
          <NavLink to="/my_gear">Gear</NavLink>
        </li>

        <li>
          <NavLink to="/jam_time">Jam Time</NavLink>
        </li>
        <li>
          <NavLink to="/cubase">Cubase</NavLink>
        </li>

        <li>
          <NavLink reloadDocument to="/games">
            Games
          </NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/blogs">
            Blogs
          </NavLink>
        </li>
        <li>
          <IoEllipsisVertical onClick={handleNavExcess} />
        </li>
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
      </ul>
    </nav>
  );
}
export default PageNav;
