import BassTheoryContent from "./BassTheoryContent";
import styles from "./BassTheoryContainer.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTool } from "../../context/ToolContext";
import BassTheoryKeyChoice from "./BassTheoryKeyChoice";
import GroovyButton from "../general/GroovyButton";
import { theoryNavList } from "./theoryNavList";

function BassTheory({ initialKey = "aflatmajor" }) {
  const [selectedKey, setSelectedKey] = useState(initialKey);
  const [context, setContext] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [previousKey, setPreviousKey] = useState("");
  const { dronePlaying, toggleDronePlaying } = useTool();
  const [ddVis, setDdVis] = useState(false);
  const jamkey = searchParams.get("jamkey");
  const jamkeycontext = searchParams.get("jamkeycontext");
  useEffect(() => {
    if (jamkey) {
      setSelectedKey(jamkey);
      searchParams.delete("jamkey");
      if (jamkeycontext) {
        setContext(jamkeycontext);
        searchParams.delete("jamkeycontext");
      }
      setSearchParams(searchParams);
    }
  }, [jamkey, jamkeycontext, searchParams, setSearchParams]);

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
    setDdVis(false);
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

  function showDD() {
    setDdVis(!ddVis);
  }

  return (
    <>
      <GroovyButton handleClick={showDD}>
        {theoryNavList.map((tnl) =>
          tnl.jsonfile === selectedKey ? tnl.displaykey : null
        )}
      </GroovyButton>
      {ddVis && (
        <BassTheoryKeyChoice
          handleTheorySelection={handleTheorySelection}
          currentKey={selectedKey}
        />
      )}

      <div className={styles.theorycontainer}>
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
    </>
  );
}

export default BassTheory;
