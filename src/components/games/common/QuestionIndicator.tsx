import styles from "./QuestionIndicator.module.css";
import { ReactNode } from "react";

type QuestionIndicatorProps = {
  children: ReactNode;
};
function QuestionIndicator({ children }: Readonly<QuestionIndicatorProps>) {
  return <div className={styles.questionindicator}>{children}</div>;
}

export default QuestionIndicator;
