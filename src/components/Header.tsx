import styles from "./Header.module.css";
import PageNav from "./PageNav";
import { useLocation } from "react-router-dom";

function Header() {
  const whereami = useLocation();
  let currentPage = "Bass Theory";
  if (whereami.pathname !== "/") {
    currentPage = whereami.pathname.substring(1);
    currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    //const underscorePresent = currentPage.indexOf("_");
    while (currentPage.indexOf("_") != -1) {
      const underscorePresent = currentPage.indexOf("_");
      currentPage = currentPage.replace("_", " ");
      currentPage =
        currentPage.substring(0, underscorePresent + 1) +
        currentPage.charAt(underscorePresent + 1).toUpperCase() +
        currentPage.substring(underscorePresent + 2, currentPage.length);
    }
  }
  return (
    <header className={styles.header}>
      <div>
        <img
          className={styles.logo}
          src="./me/gig1.png"
          width="100px"
          height="75px"
        />

        <h1>Groovy Jen Bass</h1>
        <h2>{currentPage}</h2>
        <PageNav />
      </div>
    </header>
  );
}
export default Header;
