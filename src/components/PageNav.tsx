import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink reloadDocument to="/">
            My Transcriptions
          </NavLink>
        </li>
        <li>
          <NavLink to="/about_me">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/improvisation">Improvisation</NavLink>
        </li>
        <li>
          <NavLink to="/my_gear">My Gear</NavLink>
        </li>
        <li>
          <NavLink to="/bass_theory">Bass Theory</NavLink>
        </li>
        <li>
          <NavLink to="/jam_time">Jam Time</NavLink>
        </li>
        <li>
          <NavLink to="/cubase">Cubase</NavLink>
        </li>
        <li>
          <NavLink to="/percussion">Percussion</NavLink>
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
          <NavLink to="/tips">Tips</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default PageNav;
