import { useState } from "react";
import { spices } from "./spices.ts";
import styles from "./JamSpice.module.css";
import GroovyButton from "../general/GroovyButton.tsx";

function JamSpice() {
  const [random, setRandom] = useState(-1);

  const randomNumInRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function handleClick() {
    let nextRand = randomNumInRange(0, 23);
    while (random === nextRand) {
      nextRand = randomNumInRange(0, 23);
    }
    setRandom(nextRand);
  }

  return (
    <>
      <GroovyButton handleClick={handleClick}>Spice It Up</GroovyButton>

      <div className={styles.div}>
        {random > -1 ? spices[0].spices[random].spice : null}
      </div>
    </>
  );
}
export default JamSpice;