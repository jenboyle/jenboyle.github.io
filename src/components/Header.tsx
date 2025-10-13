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
      <div className={styles.headerWrapper}>
        <div className={styles.branding}>
          <img
            className={styles.logo}
            src="./me/gig1.png"
            width="75px"
            height="56px"
            alt="gigging"
          />

          <h1 className={styles.siteTitle}>
            <span className={styles.titleLine1}>Groovy Jen</span>
            <span className={styles.titleLine2}>Bass</span>
          </h1>
        </div>

        <div className={styles.navWrapper}>
          <PageNav />
        </div>
      </div>
    </header>
  );
}
export default Header;
