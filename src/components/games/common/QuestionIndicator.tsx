import styles from "./QuestionIndicator.module.css";
import { ReactNode } from "react";

type QuestionIndicatorProps = {
  children: ReactNode;
};
function QuestionIndicator({ children }: QuestionIndicatorProps) {
  return <div className={styles.questionindicator}>{children}</div>;
}

export default QuestionIndicator;
