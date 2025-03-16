import { useState } from "react";
import styles from "./GroovyNailDesigner.module.css";
import BaseColorPicker from "../components/groovynails/BaseColorPicker";
import PatternPicker from "../components/groovynails/PatternPicker";

function GroovyNailDesigner() {
  const [leftPinkyBaseColor, setLeftPinkyBaseColor] = useState(styles.nude);
  const [showBaseColorLeftPinky, setShowBaseColorLeftPinky] = useState(false);
  const [leftPinkyDesignOverlay, setLeftPinkyDesignOverlay] = useState("");
  const [showPatternLeftPinky, setShowPatternLeftPinky] = useState(false);

  const [leftRingBaseColor, setLeftRingBaseColor] = useState(styles.nude);
  const [showBaseColorLeftRing, setShowBaseColorLeftRing] = useState(false);
  const [leftRingDesignOverlay, setLeftRingDesignOverlay] = useState("");
  const [showPatternLeftRing, setShowPatternLeftRing] = useState(false);

  const [leftMiddleBaseColor, setLeftMiddleBaseColor] = useState(styles.nude);
  const [showBaseColorLeftMiddle, setShowBaseColorLeftMiddle] = useState(false);
  const [leftMiddleDesignOverlay, setLeftMiddleDesignOverlay] = useState("");
  const [showPatternLeftMiddle, setShowPatternLeftMiddle] = useState(false);

  const [leftPointerBaseColor, setLeftPointerBaseColor] = useState(styles.nude);
  const [showBaseColorLeftPointer, setShowBaseColorLeftPointer] =
    useState(false);
  const [leftPointerDesignOverlay, setLeftPointerDesignOverlay] = useState("");
  const [showPatternLeftPointer, setShowPatternLeftPointer] = useState(false);

  const [leftThumbBaseColor, setLeftThumbBaseColor] = useState(styles.nude);
  const [showBaseColorLeftThumb, setShowBaseColorLeftThumb] = useState(false);
  const [leftThumbDesignOverlay, setLeftThumbDesignOverlay] = useState("");
  const [showPatternLeftThumb, setShowPatternLeftThumb] = useState(false);

  const [rightPinkyBaseColor, setRightPinkyBaseColor] = useState(styles.nude);
  const [showBaseColorRightPinky, setShowBaseColorRightPinky] = useState(false);
  const [rightPinkyDesignOverlay, setRightPinkyDesignOverlay] = useState("");
  const [showPatternRightPinky, setShowPatternRightPinky] = useState(false);

  const [rightRingBaseColor, setRightRingBaseColor] = useState(styles.nude);
  const [showBaseColorRightRing, setShowBaseColorRightRing] = useState(false);
  const [rightRingDesignOverlay, setRightRingDesignOverlay] = useState("");
  const [showPatternRightRing, setShowPatternRightRing] = useState(false);

  const [rightMiddleBaseColor, setRightMiddleBaseColor] = useState(styles.nude);
  const [showBaseColorRightMiddle, setShowBaseColorRightMiddle] =
    useState(false);
  const [rightMiddleDesignOverlay, setRightMiddleDesignOverlay] = useState("");
  const [showPatternRightMiddle, setShowPatternRightMiddle] = useState(false);

  const [rightPointerBaseColor, setRightPointerBaseColor] = useState(
    styles.nude
  );
  const [showBaseColorRightPointer, setShowBaseColorRightPointer] =
    useState(false);
  const [rightPointerDesignOverlay, setRightPointerDesignOverlay] =
    useState("");
  const [showPatternRightPointer, setShowPatternRightPointer] = useState(false);

  const [rightThumbBaseColor, setRightThumbBaseColor] = useState(styles.nude);
  const [showBaseColorRightThumb, setShowBaseColorRightThumb] = useState(false);
  const [rightThumbDesignOverlay, setRightThumbDesignOverlay] = useState("");
  const [showPatternRightThumb, setShowPatternRightThumb] = useState(false);

  // Left Pinky
  function handleShowBaseColorLeftPinky() {
    setShowBaseColorLeftPinky(!showBaseColorLeftPinky);
  }
  function handleShowPatternLeftPinky() {
    setShowPatternLeftPinky(!showPatternLeftPinky);
  }

  // Left Ring
  function handleShowBaseColorLeftRing() {
    setShowBaseColorLeftRing(!showBaseColorLeftRing);
  }
  function handleShowPatternLeftRing() {
    setShowPatternLeftRing(!showPatternLeftRing);
  }

  //Left Middle
  function handleShowBaseColorLeftMiddle() {
    setShowBaseColorLeftMiddle(!showBaseColorLeftMiddle);
  }
  function handleShowPatternLeftMiddle() {
    setShowPatternLeftMiddle(!showPatternLeftMiddle);
  }

  function handleShowBaseColorLeftPointer() {
    setShowBaseColorLeftPointer(!showBaseColorLeftPointer);
  }
  function handleShowPatternLeftPointer() {
    setShowPatternLeftPointer(!showPatternLeftPointer);
  }

  function handleShowBaseColorLeftThumb() {
    setShowBaseColorLeftThumb(!showBaseColorLeftThumb);
  }
  function handleShowPatternLeftThumb() {
    setShowPatternLeftThumb(!showPatternLeftThumb);
  }

  function handleShowBaseColorRightThumb() {
    setShowBaseColorRightThumb(!showBaseColorRightThumb);
  }
  function handleShowPatternRightThumb() {
    setShowPatternRightThumb(!showPatternRightThumb);
  }

  function handleShowBaseColorRightPointer() {
    setShowBaseColorRightPointer(!showBaseColorRightPointer);
  }
  function handleShowPatternRightPointer() {
    setShowPatternRightPointer(!showPatternRightPointer);
  }

  function handleShowBaseColorRightMiddle() {
    setShowBaseColorRightMiddle(!showBaseColorRightMiddle);
  }
  function handleShowPatternRightMiddle() {
    setShowPatternRightMiddle(!showPatternRightMiddle);
  }

  function handleShowBaseColorRightRing() {
    setShowBaseColorRightRing(!showBaseColorRightRing);
  }
  function handleShowPatternRightRing() {
    setShowPatternRightRing(!showPatternRightRing);
  }

  function handleShowBaseColorRightPinky() {
    setShowBaseColorRightPinky(!showBaseColorRightPinky);
  }
  function handleShowPatternRightPinky() {
    setShowPatternRightPinky(!showPatternRightPinky);
  }

  function handleLeftPinkyColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setLeftPinkyBaseColor((e.target as HTMLLIElement).id);
  }
  function handleLeftPinkyPatternChoice(e: React.MouseEvent<HTMLElement>) {
    setLeftPinkyDesignOverlay((e.target as HTMLElement).id);
  }

  function handleLeftRingColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setLeftRingBaseColor((e.target as HTMLLIElement).id);
  }
  function handleLeftRingPatternChoice(e: React.MouseEvent<HTMLElement>) {
    setLeftRingDesignOverlay((e.target as HTMLElement).id);
  }

  function handleLeftMiddleColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setLeftMiddleBaseColor((e.target as HTMLLIElement).id);
  }
  function handleLeftMiddlePatternChoice(e: React.MouseEvent<HTMLElement>) {
    setLeftMiddleDesignOverlay((e.target as HTMLElement).id);
  }

  function handleLeftPointerColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setLeftPointerBaseColor((e.target as HTMLLIElement).id);
  }
  function handleLeftPointerPatternChoice(e: React.MouseEvent<HTMLElement>) {
    setLeftPointerDesignOverlay((e.target as HTMLElement).id);
  }

  function handleLeftThumbColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setLeftThumbBaseColor((e.target as HTMLLIElement).id);
  }
  function handleLeftThumbPatternChoice(e: React.MouseEvent<HTMLElement>) {
    setLeftThumbDesignOverlay((e.target as HTMLElement).id);
  }

  function handleRightThumbColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setRightThumbBaseColor((e.target as HTMLLIElement).id);
  }
  function handleRightThumbPatternChoice(e: React.MouseEvent<HTMLElement>) {
    setRightThumbDesignOverlay((e.target as HTMLElement).id);
  }

  function handleRightPointerColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setRightPointerBaseColor((e.target as HTMLLIElement).id);
  }
  function handleRightPointerPatternChoice(e: React.MouseEvent<HTMLElement>) {
    setRightPointerDesignOverlay((e.target as HTMLElement).id);
  }

  function handleRightMiddleColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setRightMiddleBaseColor((e.target as HTMLLIElement).id);
  }
  function handleRightMiddlePatternChoice(e: React.MouseEvent<HTMLElement>) {
    setRightMiddleDesignOverlay((e.target as HTMLElement).id);
  }

  function handleRightRingColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setRightRingBaseColor((e.target as HTMLLIElement).id);
  }
  function handleRightRingPatternChoice(e: React.MouseEvent<HTMLElement>) {
    setRightRingDesignOverlay((e.target as HTMLElement).id);
  }

  function handleRightPinkyColorChoice(e: React.MouseEvent<HTMLLIElement>) {
    setRightPinkyBaseColor((e.target as HTMLLIElement).id);
  }
  function handleRightPinkyPatternChoice(e: React.MouseEvent<HTMLElement>) {
    setRightPinkyDesignOverlay((e.target as HTMLElement).id);
  }

  return (
    <table className={styles.nailtable}>
      <tbody className={styles.tbody}>
        <tr className={styles.trs}>
          <td className={styles.allnails}>
            <div
              className={`${styles.pinky} ${leftPinkyBaseColor} ${
                leftPinkyDesignOverlay ? styles.allnailsdivoverlaying : ""
              }`}
            >
              {leftPinkyDesignOverlay ? (
                <img
                  src={leftPinkyDesignOverlay}
                  className={styles.overlay}
                ></img>
              ) : null}
            </div>
          </td>
          <td className={styles.allnails}>
            <div
              className={`${styles.ring} ${leftRingBaseColor} ${
                leftRingDesignOverlay ? styles.allnailsdivoverlaying : ""
              }`}
            >
              {leftRingDesignOverlay ? (
                <img
                  src={leftRingDesignOverlay}
                  className={styles.overlaymedium}
                ></img>
              ) : null}
            </div>
          </td>
          <td className={styles.allnails}>
            <div
              className={`${styles.middle} ${leftMiddleBaseColor} ${
                leftMiddleDesignOverlay ? styles.allnailsdivoverlaying : ""
              }`}
            >
              {leftMiddleDesignOverlay ? (
                <img
                  src={leftMiddleDesignOverlay}
                  className={styles.overlaylarge}
                ></img>
              ) : null}
            </div>
          </td>
          <td className={styles.allnails}>
            <div
              className={`${styles.pointer} ${leftPointerBaseColor} ${
                leftPointerDesignOverlay ? styles.allnailsdivoverlaying : ""
              }`}
            >
              {leftPointerDesignOverlay ? (
                <img
                  src={leftPointerDesignOverlay}
                  className={styles.overlaymedium}
                ></img>
              ) : null}
            </div>
          </td>
          <td className={styles.allnails}>
            <div
              className={`${styles.thumb} ${leftThumbBaseColor} ${
                leftThumbDesignOverlay ? styles.allnailsdivoverlaying : ""
              }`}
            >
              {leftThumbDesignOverlay ? (
                <img
                  src={leftThumbDesignOverlay}
                  className={styles.overlaythumb}
                ></img>
              ) : null}
            </div>
          </td>
          <td>
            <div className={styles.spacer}></div>
          </td>
          <td className={styles.allnails}>
            <div
              className={`${styles.thumb} ${rightThumbBaseColor} ${
                rightThumbDesignOverlay ? styles.allnailsdivoverlaying : ""
              }`}
            >
              {rightThumbDesignOverlay ? (
                <img
                  src={rightThumbDesignOverlay}
                  className={styles.overlaythumb}
                ></img>
              ) : null}
            </div>
          </td>
          <td className={styles.allnails}>
            <div
              className={`${styles.pointer} ${rightPointerBaseColor} ${
                rightPointerDesignOverlay ? styles.allnailsdivoverlaying : ""
              }`}
            >
              {rightPointerDesignOverlay ? (
                <img
                  src={rightPointerDesignOverlay}
                  className={styles.overlaymedium}
                ></img>
              ) : null}
            </div>
          </td>
          <td className={styles.allnails}>
            <div
              className={`${styles.middle} ${rightMiddleBaseColor} ${
                rightMiddleDesignOverlay ? styles.allnailsdivoverlaying : ""
              }`}
            >
              {rightMiddleDesignOverlay ? (
                <img
                  src={rightMiddleDesignOverlay}
                  className={styles.overlaylarge}
                ></img>
              ) : null}
            </div>
          </td>
          <td className={styles.allnails}>
            <div
              className={`${styles.ring} ${rightRingBaseColor} ${
                rightRingDesignOverlay ? styles.allnailsdivoverlaying : ""
              }`}
            >
              {rightRingDesignOverlay ? (
                <img
                  src={rightRingDesignOverlay}
                  className={styles.overlaymedium}
                ></img>
              ) : null}
            </div>
          </td>
          <td className={styles.allnails}>
            <div
              className={`${styles.pinky} ${rightPinkyBaseColor} ${
                rightPinkyDesignOverlay ? styles.allnailsdivoverlaying : ""
              }`}
            >
              {rightPinkyDesignOverlay ? (
                <img
                  src={rightPinkyDesignOverlay}
                  className={styles.overlay}
                ></img>
              ) : null}
            </div>
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
        <tr>
          <td className={styles.tddropdowns}>
            <PatternPicker
              showPatternPicker={showPatternLeftPinky}
              handleShowPatternPicker={handleShowPatternLeftPinky}
              currentPattern={leftPinkyDesignOverlay}
              handlePatternChoice={handleLeftPinkyPatternChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <PatternPicker
              showPatternPicker={showPatternLeftRing}
              handleShowPatternPicker={handleShowPatternLeftRing}
              currentPattern={leftRingDesignOverlay}
              handlePatternChoice={handleLeftRingPatternChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <PatternPicker
              showPatternPicker={showPatternLeftMiddle}
              handleShowPatternPicker={handleShowPatternLeftMiddle}
              currentPattern={leftMiddleDesignOverlay}
              handlePatternChoice={handleLeftMiddlePatternChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <PatternPicker
              showPatternPicker={showPatternLeftPointer}
              handleShowPatternPicker={handleShowPatternLeftPointer}
              currentPattern={leftPointerDesignOverlay}
              handlePatternChoice={handleLeftPointerPatternChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <PatternPicker
              showPatternPicker={showPatternLeftThumb}
              handleShowPatternPicker={handleShowPatternLeftThumb}
              currentPattern={leftThumbDesignOverlay}
              handlePatternChoice={handleLeftThumbPatternChoice}
            />
          </td>
          <td />
          <td className={styles.tddropdowns}>
            <PatternPicker
              showPatternPicker={showPatternRightThumb}
              handleShowPatternPicker={handleShowPatternRightThumb}
              currentPattern={rightThumbDesignOverlay}
              handlePatternChoice={handleRightThumbPatternChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <PatternPicker
              showPatternPicker={showPatternRightPointer}
              handleShowPatternPicker={handleShowPatternRightPointer}
              currentPattern={rightPointerDesignOverlay}
              handlePatternChoice={handleRightPointerPatternChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <PatternPicker
              showPatternPicker={showPatternRightMiddle}
              handleShowPatternPicker={handleShowPatternRightMiddle}
              currentPattern={rightMiddleDesignOverlay}
              handlePatternChoice={handleRightMiddlePatternChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <PatternPicker
              showPatternPicker={showPatternRightRing}
              handleShowPatternPicker={handleShowPatternRightRing}
              currentPattern={rightRingDesignOverlay}
              handlePatternChoice={handleRightRingPatternChoice}
            />
          </td>
          <td className={styles.tddropdowns}>
            <PatternPicker
              showPatternPicker={showPatternRightPinky}
              handleShowPatternPicker={handleShowPatternRightPinky}
              currentPattern={rightPinkyDesignOverlay}
              handlePatternChoice={handleRightPinkyPatternChoice}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default GroovyNailDesigner;
