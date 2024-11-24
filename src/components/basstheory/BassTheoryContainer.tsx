import BassTheoryContent from "./BassTheoryContent";
import BassTheorySideNav from "./BassTheorySideNav";
import styles from "./BassTheoryContainer.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTool } from "../../context/ToolContext";

function BassTheory({ initialKey = "aflatmajor" }) {
  const [selectedKey, setSelectedKey] = useState(initialKey);
  const [context, setContext] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [previousKey, setPreviousKey] = useState("");
  const { dronePlaying, toggleDronePlaying } = useTool();
  const jamkey = searchParams.get("jamkey");
  useEffect(() => {
    if (jamkey) {
      setSelectedKey(jamkey);
      searchParams.delete("jamkey");
      setSearchParams(searchParams);
    }
  }, [jamkey, searchParams, setSearchParams]);

  // useEffect(() => {
  //   document.body.addEventListener("click", (e) => {
  //     console.log("test e.target" + (e.target as HTMLSpanElement));
  //     if (dronePlaying && (e.target as HTMLSpanElement) == undefined) {
  //       //(e.target as HTMLSpanElement).id != "droneSpan")
  //       setDronePlaying(false);
  //     }
  //   });
  // }, [dronePlaying]);

  function handleTheorySelection(e: React.MouseEvent<HTMLLIElement>) {
    setSelectedKey((e.target as HTMLLIElement).id);
    if (dronePlaying) {
      toggleDronePlaying();
    }
    //console.log(`handle called sel ${(e.target as HTMLLIElement).id}`);
  }

  function handleNavTheory(key: string, context: string) {
    setPreviousKey(selectedKey);
    setSelectedKey(key);
    if (dronePlaying) {
      toggleDronePlaying();
    }
    //console.log(`handle called nt ${key}`);

    let fretscaleselected = context.toLowerCase();
    fretscaleselected = fretscaleselected.replace("dim", "").trim();
    fretscaleselected = fretscaleselected.replace("m", "");

    setContext(fretscaleselected);
  }

  return (
    <div className={styles.theorycontainer}>
      <div className={styles.theorysidenav}>
        <BassTheorySideNav
          handleTheorySelection={handleTheorySelection}
          currentKey={selectedKey}
        />
      </div>
      <div className={styles.theorycontent}>
        <BassTheoryContent
          jsonfile={selectedKey}
          handleNavTheory={handleNavTheory}
          context={context}
          onSelectKey={setSelectedKey}
          previousKey={previousKey}
        />
      </div>
      <div className={styles.theoryclear}></div>
    </div>
  );
}

export default BassTheory;
