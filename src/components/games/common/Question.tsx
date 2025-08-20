import { ReactNode } from "react";
import styles from "./Question.module.css";
type QuestionProps = {
  children: ReactNode;
};
function Question({ children }: QuestionProps) {
  return <div className={styles.question}>{children}</div>;
}

export default Question;
