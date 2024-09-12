import styles from "./BassTheorySideNav.module.css";
import { theoryNavList } from "./theoryNavList";

interface BassTheorySideNavProps {
  handleTheorySelection: (e: React.MouseEvent<HTMLLIElement>) => void;
}

function BassTheorySideNav({ handleTheorySelection }: BassTheorySideNavProps) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.theoryList}>
        {theoryNavList.map((item) => (
          <li
            key={item.jsonfile}
            id={item.jsonfile}
            onClick={handleTheorySelection}
          >
            {item.displaykey}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BassTheorySideNav;
