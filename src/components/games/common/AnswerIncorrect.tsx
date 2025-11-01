import { ReactNode } from "react";
import styles from "./AnswerIncorrect.module.css";
type AnswerIncorrectProps = {
  children: ReactNode;
};
function AnswerIncorrect({ children }: Readonly<AnswerIncorrectProps>) {
  return <div className={styles.incorrect}>{children}</div>;
}

export default AnswerIncorrect;
