import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link reloadDocument to="/">
            My Transcriptions
          </Link>
        </li>
        <li>
          <Link to="/about_me">About Me</Link>
        </li>
        <li>
          <Link to="/improvisation">Improvisation</Link>
        </li>
        <li>
          <Link to="/my_gear">My Gear</Link>
        </li>
        <li>
          <Link to="/bass_theory">Bass Theory</Link>
        </li>
        <li>
          <Link to="/jam_time">Jam Time</Link>
        </li>
        <li>
          <Link to="/cubase">Cubase</Link>
        </li>
        <li>
          <Link to="/percussion">Percussion</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/tips">Tips</Link>
        </li>
      </ul>
    </nav>
  );
}
export default PageNav;
