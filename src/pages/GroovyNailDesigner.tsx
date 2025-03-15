import { useState } from "react";
import styles from "./GroovyNailDesigner.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { availablePolish } from "../components/groovynails/availablePolish";

function GroovyNailDesigner() {
  const [leftPinkyBaseColor, setLeftPinkyBaseColor] = useState(styles.nude);
  const [rightPinkyBaseColor, setRightPinkyBaseColor] = useState(styles.nude);
  const [showColorLeftPinky, setShowColorLeftPinky] = useState(false);

  function handleLeftPinkyColorChoice(e: React.ChangeEvent<HTMLSelectElement>) {
    setLeftPinkyBaseColor(e.target.value);
  }

  function handleLeftPinkyColorChoiceM(e: React.MouseEvent<HTMLLIElement>) {
    setLeftPinkyBaseColor((e.target as HTMLLIElement).id);
  }

  function handleRightPinkyColorChoice(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    setRightPinkyBaseColor(e.target.value);
  }

  function handleShowColorPickerLeftPinky() {
    setShowColorLeftPinky(!showColorLeftPinky);
  }
  return (
    <table>
      <tbody>
        <tr className={styles.trs}>
          <td className={styles.allnails}>
            <div className={`${styles.pinky} ${leftPinkyBaseColor}`}></div>
          </td>
          <td className={styles.allnails}>
            <div className={styles.ring}></div>
          </td>
          <td className={styles.allnails}>
            <div className={styles.middle}></div>
          </td>
          <td className={styles.allnails}>
            <div className={styles.pointer}></div>
          </td>
          <td className={styles.allnails}>
            <div className={styles.thumb}></div>
          </td>
          <td>
            <div className={styles.spacer}></div>
          </td>
          <td className={styles.allnails}>
            <div className={styles.thumb}></div>
          </td>
          <td className={styles.allnails}>
            <div className={styles.pointer}></div>
          </td>
          <td className={styles.allnails}>
            <div className={styles.middle}></div>
          </td>
          <td className={styles.allnails}>
            <div className={styles.ring}></div>
          </td>
          <td className={styles.allnails}>
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
        <tr>
          <td>
            <div
              className={styles.colorpicker}
              onClick={handleShowColorPickerLeftPinky}
            >
              <div
                className={` ${showColorLeftPinky ? "" : leftPinkyBaseColor} ${
                  showColorLeftPinky ? "" : styles.closeddd
                } `}
              >
                {showColorLeftPinky ? (
                  <ul>
                    {availablePolish!.map((polish) => (
                      <li
                        key={polish.polish}
                        id={polish.polish}
                        value={polish.polish}
                        className={polish.polish}
                        onClick={handleLeftPinkyColorChoiceM}
                      >
                        test
                      </li>
                    ))}
                  </ul>
                ) : (
                  <IoIosArrowDown />
                )}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default GroovyNailDesigner;
