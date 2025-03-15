import { IoIosArrowDown } from "react-icons/io";
import { availablePolish } from "./availablePolish";
import styles from "../../pages/GroovyNailDesigner.module.css";

interface BaseColorPickerProps {
  showBaseColorPicker: boolean;
  handleShowBaseColorPicker: () => void;
  currentBaseColor: string;
  handleColorChoice: (e: React.MouseEvent<HTMLLIElement>) => void;
}

function BaseColorPicker({
  showBaseColorPicker,
  handleShowBaseColorPicker,
  currentBaseColor,
  handleColorChoice,
}: BaseColorPickerProps) {
  return (
    <div className={styles.colorpicker} onClick={handleShowBaseColorPicker}>
      <div
        className={` ${showBaseColorPicker ? "" : currentBaseColor} ${
          showBaseColorPicker ? "" : styles.closeddd
        } `}
      >
        {showBaseColorPicker ? (
          <ul>
            {availablePolish.map((polish) => (
              <li
                key={polish.polish}
                id={polish.polish}
                value={polish.polish}
                className={polish.polish}
                onClick={handleColorChoice}
              >
                test
              </li>
            ))}
          </ul>
        ) : (
          <>
            💅
            <IoIosArrowDown />
          </>
        )}
      </div>
    </div>
  );
}

export default BaseColorPicker;
