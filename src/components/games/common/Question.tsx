import styles from "./Question.module.css";
type QuestionProps = {
  children: string | string[] | JSX.Element | JSX.Element[];
};
function Question({ children }: QuestionProps) {
  return <div className={styles.question}>{children}</div>;
}

export default Question;
