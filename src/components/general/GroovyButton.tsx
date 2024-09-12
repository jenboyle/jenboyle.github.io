import * as React from "react";
import styles from "./GroovyButton.module.css";
type GroovyButtonProps = {
  children: React.ReactNode;
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  customStyles?: string;
};
function GroovyButton({
  children,
  handleClick,
  customStyles,
}: GroovyButtonProps) {
  return (
    <button
      className={`${styles.jambuttons} ${customStyles ? customStyles : ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
export default GroovyButton;
