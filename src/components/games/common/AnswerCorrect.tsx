import { ReactNode } from "react";
import styles from "./AnswerCorrect.module.css";

type AnswerCorrectProps = {
  children: ReactNode;
};

function AnswerCorrect({ children }: AnswerCorrectProps) {
  return <div className={styles.correct}>{children}</div>;
}

export default AnswerCorrect;
