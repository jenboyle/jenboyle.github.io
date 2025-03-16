import { IoIosArrowDown } from "react-icons/io";
import { availablePatterns } from "./availablePatterns";
import styles from "../../pages/GroovyNailDesigner.module.css";

interface PatternPickerProps {
  showPatternPicker: boolean;
  handleShowPatternPicker: () => void;
  currentPattern: string;
  handlePatternChoice: (e: React.MouseEvent<HTMLElement>) => void;
}

function PatternPicker({
  showPatternPicker,
  handleShowPatternPicker,
  currentPattern,
  handlePatternChoice,
}: PatternPickerProps) {
  return (
    <div
      className={`${styles.colorpicker} ${styles.patternpicker}`}
      onClick={handleShowPatternPicker}
    >
      <div
        className={` ${showPatternPicker ? "" : currentPattern} ${
          showPatternPicker ? "" : styles.closeddd
        } `}
      >
        {showPatternPicker ? (
          <ul>
            {availablePatterns.map((pattern) => (
              <li
                key={pattern.pattern}
                id={pattern.pattern}
                value={pattern.pattern}
                onClick={handlePatternChoice}
              >
                <div onClick={handlePatternChoice} id={pattern.pattern}>
                  {pattern.pattern ? (
                    <img
                      src={pattern.pattern}
                      width="10px"
                      height="20px"
                      id={pattern.pattern}
                    ></img>
                  ) : (
                    "-"
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <>
            {currentPattern ? (
              <img src={currentPattern} width="10px" height="20px"></img>
            ) : (
              <span>⡑</span>
            )}

            <IoIosArrowDown />
          </>
        )}
      </div>
    </div>
  );
}

export default PatternPicker;
