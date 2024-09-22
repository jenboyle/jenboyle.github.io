import { useState } from "react";
import { allKeys } from "../allKeys";
import styles from "./JamKey.module.css";
import GroovyButton from "../general/GroovyButton";
import { Link } from "react-router-dom";

function JamKey() {
  const [randomKey, setRandomKey] = useState(-1);

  const randomNumInRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function handleClick() {
    setRandomKey(randomNumInRange(0, 29));
  }

  // function handleNavTheory() {

  // }
  //<a onClick={() => handleNavTheory("fret_ionian")}>Ionian</a>

  //<Link to="/bass_theory=">theory</Link>;

  //<Link to="/bass_theory?key=fret_ionian">theory</Link>

  return (
    <>
      <GroovyButton handleClick={handleClick}>Key Generator</GroovyButton>
      <div className={styles.div}>
        {randomKey > -1 ? (
          allKeys[0].keys[randomKey].link ? (
            <Link
              to={`/?jamkey=${allKeys[0].keys[randomKey].link}`}
              state={{ selkey: allKeys[0].keys[randomKey].link }}
            >
              {allKeys[0].keys[randomKey].key}
            </Link>
          ) : (
            allKeys[0].keys[randomKey].key
          )
        ) : null}
      </div>
    </>
  );
}
export default JamKey;
