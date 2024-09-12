import BassTheoryContent from "./BassTheoryContent";
import BassTheorySideNav from "./BassTheorySideNav";
import styles from "./BassTheoryContainer.module.css";
import { useState } from "react";

function BassTheory() {
  const [selectedKey, setSelectedKey] = useState("");
  const [context, setContext] = useState("");

  function handleTheorySelection(e: React.MouseEvent<HTMLLIElement>) {
    setSelectedKey((e.target as HTMLLIElement).id);
    console.log(`handle called sel ${(e.target as HTMLLIElement).id}`);
  }

  function handleNavTheory(key: string, context: string) {
    setSelectedKey(key);
    console.log(`handle called nt ${key}`);

    let fretscaleselected = context.toLowerCase();
    fretscaleselected = fretscaleselected.replace("dim", "").trim();
    fretscaleselected = fretscaleselected.replace("m", "");

    setContext(fretscaleselected);
  }

  return (
    <div className={styles.theorycontainer}>
      <div className={styles.theorysidenav}>
        <BassTheorySideNav handleTheorySelection={handleTheorySelection} />
      </div>
      <div className={styles.theorycontent}>
        <BassTheoryContent
          jsonfile={selectedKey}
          handleNavTheory={handleNavTheory}
          context={context}
        />
      </div>
      <div className={styles.theoryclear}></div>
    </div>
  );
}

export default BassTheory;
