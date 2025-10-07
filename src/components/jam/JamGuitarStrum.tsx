import { useState } from "react";
import commonStyles from "../general/GroovyStyles.module.css";
import styles from "./JamGuitarStrum.module.css";
import { strums } from "./strums";
import GroovyButton from "../general/GroovyButton";

function JamGuitarStrum() {
  const [randomPattern, setRandomPattern] = useState(-1);

  const randomNumInRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function handleClick() {
    setRandomPattern(randomNumInRange(0, strums[0].strums.length - 1));
  }

  return (
    <>
      <div className={styles.jambtn}>
        <GroovyButton handleClick={handleClick}>Guitar Strum</GroovyButton>
      </div>
      <div className={commonStyles.div} data-testid="jamStrum">
        <table className={styles.table}>
          <tbody>
            <tr>
              {randomPattern > -1
                ? strums[0].strums[randomPattern].beat
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
                ? strums[0].strums[randomPattern].pattern
                    .split(",")
                    .map((item, index) => (
                      <td key={index} className={styles.td}>{`${
                        item === "D" ? "⬇" : ""
                      }${item === "U" ? "🔺" : ""}`}</td>
                    ))
                : null}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default JamGuitarStrum;
