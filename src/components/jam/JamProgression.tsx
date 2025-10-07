import { useState } from "react";
import commonStyles from "../general/GroovyStyles.module.css";
import styles from "./JamGuitarStrum.module.css";
import { progressions } from "./progressions";
import GroovyButton from "../general/GroovyButton";

function JamProgression() {
  const [randomPattern, setRandomPattern] = useState(-1);

  const randomNumInRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function handleClick() {
    setRandomPattern(
      randomNumInRange(0, progressions[0].progressions.length - 1)
    );
  }

  return (
    <>
      <GroovyButton handleClick={handleClick}>Guitar Progression</GroovyButton>

      <div className={commonStyles.div} data-testid="jamProgDiv">
        <table className={styles.table}>
          <tbody>
            <tr>
              {randomPattern > -1
                ? progressions[0].progressions[randomPattern].progression
                    .split(",")
                    .map((item, index) => (
                      <td key={index} className={styles.strumcolour}>
                        {item}
                      </td>
                    ))
                : null}
            </tr>
            <tr>
              {randomPattern > -1
                ? progressions[0].progressions[randomPattern].num
                    .split(",")
                    .map((item, index) => (
                      <td key={index} className={styles.td}>
                        {item}
                      </td>
                    ))
                : null}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default JamProgression;
