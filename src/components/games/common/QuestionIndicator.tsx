import styles from "./QuestionIndicator.module.css";
type QuestionIndicatorProps = {
  children: string | JSX.Element | JSX.Element[];
};
function QuestionIndicator({ children }: QuestionIndicatorProps) {
  return <div className={styles.questionindicator}>{children}</div>;
}

export default QuestionIndicator;
