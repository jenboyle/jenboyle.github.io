import styles from "./BassTheoryKeyChoice.module.css";
import { theoryNavList } from "./theoryNavList";

interface BassTheorySideNavProps {
  handleTheorySelection: (e: React.MouseEvent<HTMLLIElement>) => void;

  currentKey: string;
}

function BassTheoryKeyChoice({
  handleTheorySelection,
  currentKey,
}: BassTheorySideNavProps) {
  // console.log(currentKey);
  return (
    <div className={styles.overlay}>
      <ul className={styles.ul}>
        {theoryNavList.map((item) => (
          <li
            key={item.jsonfile}
            id={item.jsonfile}
            onClick={handleTheorySelection}
            className={`${styles.li} ${
              currentKey === item.jsonfile ? styles.active : ""
            }`}
          >
            {item.displaykey}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BassTheoryKeyChoice;
