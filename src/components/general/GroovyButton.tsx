import * as React from "react";
import styles from "./GroovyButton.module.css";
type GroovyButtonProps = {
  children: React.ReactNode;
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  customStyles?: string;
  disabled?: boolean;
  id?: string;
};
function GroovyButton({
  children,
  handleClick,
  customStyles,
  id,
  disabled = false,
}: GroovyButtonProps) {
  return (
    <button
      className={`${styles.jambuttons} ${customStyles ? customStyles : ""}`}
      onClick={handleClick}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
}
export default GroovyButton;
