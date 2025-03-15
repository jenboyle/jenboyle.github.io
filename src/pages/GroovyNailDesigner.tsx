import { useState } from "react";
import styles from "./GroovyNailDesigner.module.css";
import BaseColorPicker from "../components/groovynails/BaseColorPicker";

function GroovyNailDesigner() {
  const [leftPinkyBaseColor, setLeftPinkyBaseColor] = useState(styles.nude);
  const [showBaseColorLeftPinky, setShowBaseColorLeftPinky] = useState(false);
  const [leftRingBaseColor, setLeftRingBaseColor] = useState(styles.nude);
  const [showBaseColorLeftRing, setShowBaseColorLeftRing] = useState(false);
  const [leftMiddleBaseColor, setLeftMiddleBaseColor] = useState(styles.nude);
  const [showBaseColorLeftMiddle, setShowBaseColorLeftMiddle] = useState(false);
  const [leftPointerBaseColor, setLeftPointerBaseColor] = useState(styles.nude);
  const [showBaseColorLeftPointer, setShowBaseColorLeftPointer] =
    useState(false);
  const [leftThumbBaseColor, setLeftThumbBaseColor] = useState(styles.nude);
  const [showBaseColorLeftThumb, setShowBaseColorLeftThumb] = useState(false);

  const [rightPinkyBaseColor, setRightPinkyBaseColor] = useState(styles.nude);
  const [showBaseColorRightPinky, setShowBaseColorRightPinky] = useState(false);
  const [rightRingBaseColor, setRightRingBaseColor] = useState(styles.nude);
  const [showBaseColorRightRing, setShowBaseColorRightRing] = useState(false);
  const [rightMiddleBaseColor, setRightMiddleBaseColor] = useState(styles.nude);
  const [showBaseColorRightMiddle, setShowBaseColorRightMiddle] =
    useState(false);
  const [rightPointerBaseColor, setRightPointerBaseColor] = useState(
    styles.nude
  );
  const [showBaseColorRightPointer, setShowBaseColorRightPointer] =
    useState(false);
  const [rightThumbBaseColor, setRightThumbBaseColor] = useState(styles.nude);
  const [showBaseColorRightThumb, setShowBaseColorRightThumb] = useState(false);

  function handleShowBaseColorLeftPinky() {
    setShowBaseColorLeftPinky(!showBaseColorLeftPinky);
  }
  function handleShowBaseColorLeftRing() {
    setShowBaseColorLeftRing(!showBaseColorLeftRing);
  }
  function handleShowBaseColorLeftMiddle() {
    setShowBaseColorLeftMiddle(!showBaseColorLeftMiddle);
  }
  function handleShowBaseColorLeftPointer() {
    setShowBaseColorLeftPointer(!showBaseColorLeftPointer);
  }
  function handleShowBaseColorLeftThumb() {
    setShowBaseColorLeftThumb(!showBaseColorLeftThumb);
  }

  function handleShowBaseColorRightThumb() {
    setShowBaseColorRightThumb(!showBaseColorRightThumb);
  }

  function handleShowBaseColorRightPointer() {
    setShowBaseColorRightPointer(!showBaseColorRightPointer);
  }

  function handleShowBaseColorRightMiddle() {
    setShowBaseColorRightMiddle(!showBaseColorRightMiddle);
  }

  function handleShowBaseColorRightRing() {
    setShowBaseColorRightRing(!showBaseColorRightRing);
  }

  function handleShowBaseColorRightPinky() {
    setShowBaseColorRightPinky(!showBaseColorRightPinky);
  }

  function handleLeftPinkyColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setLeftPinkyBaseColor((e.target as HTMLLIElement).id);
  }

  function handleLeftRingColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setLeftRingBaseColor((e.target as HTMLLIElement).id);
  }

  function handleLeftMiddleColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setLeftMiddleBaseColor((e.target as HTMLLIElement).id);
  }

  function handleLeftPointerColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setLeftPointerBaseColor((e.target as HTMLLIElement).id);
  }

  function handleLeftThumbColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setLeftThumbBaseColor((e.target as HTMLLIElement).id);
  }

  function handleRightThumbColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setRightThumbBaseColor((e.target as HTMLLIElement).id);
  }

  function handleRightPointerColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setRightPointerBaseColor((e.target as HTMLLIElement).id);
  }

  function handleRightMiddleColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setRightMiddleBaseColor((e.target as HTMLLIElement).id);
  }

  function handleRightRingColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setRightRingBaseColor((e.target as HTMLLIElement).id);
  }

  function handleRightPinkyColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setRightPinkyBaseColor((e.target as HTMLLIElement).id);
  }

  return (
    <table>
      <tbody>
        <tr className={styles.trs}>
          <td className={styles.allnails}>
            <div className={`${styles.pinky} ${leftPinkyBaseColor}`}></div>
          </td>
          <td className={styles.allnails}>
            <div className={`${styles.ring} ${leftRingBaseColor}`}></div>
          </td>
          <td className={styles.allnails}>
            <div className={`${styles.middle} ${leftMiddleBaseColor}`}></div>
          </td>
          <td className={styles.allnails}>
            <div className={`${styles.pointer} ${leftPointerBaseColor}`}></div>
          </td>
          <td className={styles.allnails}>
            <div className={`${styles.thumb} ${leftThumbBaseColor}`}></div>
          </td>
          <td>
            <div className={styles.spacer}></div>
          </td>
          <td className={styles.allnails}>
            <div className={`${styles.thumb} ${rightThumbBaseColor}`}></div>
          </td>
          <td className={styles.allnails}>
            <div className={`${styles.pointer} ${rightPointerBaseColor}`}></div>
          </td>
          <td className={styles.allnails}>
            <div className={`${styles.middle} ${rightMiddleBaseColor}`}></div>
          </td>
          <td className={styles.allnails}>
            <div className={`${styles.ring} ${rightRingBaseColor}`}></div>
          </td>
          <td className={styles.allnails}>
            <div className={`${styles.pinky} ${rightPinkyBaseColor}`}></div>
          </td>
        </tr>
        <tr>
          <td className={styles.tddropdowns}>
            <BaseColorPicker
              showBaseColorPicker={showBaseColorLeftPinky}
              handleShowBaseColorPicker={handleShowBaseColorLeftPinky}
              currentBaseColor={leftPinkyBaseColor}
              handleColorChoice={handleLeftPinkyColorChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <BaseColorPicker
              showBaseColorPicker={showBaseColorLeftRing}
              handleShowBaseColorPicker={handleShowBaseColorLeftRing}
              currentBaseColor={leftRingBaseColor}
              handleColorChoice={handleLeftRingColorChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <BaseColorPicker
              showBaseColorPicker={showBaseColorLeftMiddle}
              handleShowBaseColorPicker={handleShowBaseColorLeftMiddle}
              currentBaseColor={leftMiddleBaseColor}
              handleColorChoice={handleLeftMiddleColorChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <BaseColorPicker
              showBaseColorPicker={showBaseColorLeftPointer}
              handleShowBaseColorPicker={handleShowBaseColorLeftPointer}
              currentBaseColor={leftPointerBaseColor}
              handleColorChoice={handleLeftPointerColorChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <BaseColorPicker
              showBaseColorPicker={showBaseColorLeftThumb}
              handleShowBaseColorPicker={handleShowBaseColorLeftThumb}
              currentBaseColor={leftThumbBaseColor}
              handleColorChoice={handleLeftThumbColorChoice}
            />
          </td>
          <td />
          <td className={styles.tddropdowns}>
            <BaseColorPicker
              showBaseColorPicker={showBaseColorRightThumb}
              handleShowBaseColorPicker={handleShowBaseColorRightThumb}
              currentBaseColor={rightThumbBaseColor}
              handleColorChoice={handleRightThumbColorChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <BaseColorPicker
              showBaseColorPicker={showBaseColorRightPointer}
              handleShowBaseColorPicker={handleShowBaseColorRightPointer}
              currentBaseColor={rightPointerBaseColor}
              handleColorChoice={handleRightPointerColorChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <BaseColorPicker
              showBaseColorPicker={showBaseColorRightMiddle}
              handleShowBaseColorPicker={handleShowBaseColorRightMiddle}
              currentBaseColor={rightMiddleBaseColor}
              handleColorChoice={handleRightMiddleColorChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <BaseColorPicker
              showBaseColorPicker={showBaseColorRightRing}
              handleShowBaseColorPicker={handleShowBaseColorRightRing}
              currentBaseColor={rightRingBaseColor}
              handleColorChoice={handleRightRingColorChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <BaseColorPicker
              showBaseColorPicker={showBaseColorRightPinky}
              handleShowBaseColorPicker={handleShowBaseColorRightPinky}
              currentBaseColor={rightPinkyBaseColor}
              handleColorChoice={handleRightPinkyColorChoice}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default GroovyNailDesigner;
