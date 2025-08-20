import { ReactNode } from "react";
import styles from "./HelpContent.module.css";
type HelpContentProps = {
  children: ReactNode;
};
function HelpContent({ children }: HelpContentProps) {
  return <div className={styles.helpcontent}>{children}</div>;
}

export default HelpContent;
