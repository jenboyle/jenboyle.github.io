import * as React from "react";
import styles from "./GroovyButton.module.css";
type GroovyButtonProps = {
  children: React.ReactNode;
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  customStyles?: string;
  disabled?: boolean;
};
function GroovyButton({
  children,
  handleClick,
  customStyles,
  disabled = false,
}: GroovyButtonProps) {
  return (
    <button
      className={`${styles.jambuttons} ${customStyles ? customStyles : ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default GroovyButton;
