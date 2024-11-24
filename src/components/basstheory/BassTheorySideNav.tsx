import styles from "./BassTheorySideNav.module.css";
import { theoryNavList } from "./theoryNavList";

interface BassTheorySideNavProps {
  handleTheorySelection: (e: React.MouseEvent<HTMLLIElement>) => void;

  currentKey: string;
}

function BassTheorySideNav({
  handleTheorySelection,
  currentKey,
}: BassTheorySideNavProps) {
  // console.log(currentKey);
  return (
    <nav className={styles.nav}>
      <ul className={styles.theoryList}>
        {theoryNavList.map((item) => (
          <li
            key={item.jsonfile}
            id={item.jsonfile}
            onClick={handleTheorySelection}
            className={`${currentKey === item.jsonfile ? styles.active : ""}`}
          >
            {item.displaykey}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BassTheorySideNav;
