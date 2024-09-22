import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import { IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react";

function PageNav() {
  const [showNavExcess, setShowNavExcess] = useState(false);

  function handleNavExcess() {
    setShowNavExcess(!showNavExcess);
  }
  return (
    <nav className={styles.nav}>
      <ul>
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
          <ul className={styles.excessnav}>
            <li>
              <NavLink to="/about_me" onClick={handleNavExcess}>
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/percussion" onClick={handleNavExcess}>
                Percussion
              </NavLink>
            </li>
            <li>
              <NavLink to="/tips" onClick={handleNavExcess}>
                Tips
              </NavLink>
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
}
export default PageNav;
