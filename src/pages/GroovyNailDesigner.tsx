import { useState } from "react";
import styles from "./GroovyNailDesigner.module.css";

function GroovyNailDesigner() {
  const [leftPinkyBaseColor, setLeftPinkyBaseColor] = useState(styles.nude);
  const [rightPinkyBaseColor, setRightPinkyBaseColor] = useState(styles.nude);

  function handleLeftPinkyColorChoice(e: React.ChangeEvent<HTMLSelectElement>) {
    setLeftPinkyBaseColor(e.target.value);
  }

  function handleRightPinkyColorChoice(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    setRightPinkyBaseColor(e.target.value);
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <div className={`${styles.pinky} ${leftPinkyBaseColor}`}></div>
          </td>
          <td>
            <div className={styles.ring}></div>
          </td>
          <td>
            <div className={styles.middle}></div>
          </td>
          <td>
            <div className={styles.pointer}></div>
          </td>
          <td>
            <div className={styles.thumb}></div>
          </td>
          <td>
            <div className={styles.spacer}></div>
          </td>
          <td>
            <div className={styles.thumb}></div>
          </td>
          <td>
            <div className={styles.pointer}></div>
          </td>
          <td>
            <div className={styles.middle}></div>
          </td>
          <td>
            <div className={styles.ring}></div>
          </td>
          <td>
            <div className={`${styles.pinky} ${rightPinkyBaseColor}`}></div>
          </td>
        </tr>
        <tr>
          <td>
            <select
              name="lpcolor"
              id="lpcolor"
              className={styles.base}
              onChange={handleLeftPinkyColorChoice}
            >
              <option value={`${styles.nude}`}></option>
              <option value={`${styles.white}`}>⚪️</option>
              <option value={`${styles.black}`}>⚫️</option>
            </select>
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>
            <select
              name="rpcolor"
              id="rpcolor"
              className={styles.base}
              onChange={handleRightPinkyColorChoice}
            >
              <option value={`${styles.nude}`}></option>
              <option value={`${styles.white}`}>⚪️</option>
              <option value={`${styles.black}`}>⚫️</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default GroovyNailDesigner;
