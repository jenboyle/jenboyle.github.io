import styles from "./AnswerIncorrect.module.css";
type AnswerIncorrectProps = {
  children: string | string[] | JSX.Element | JSX.Element[];
};
function AnswerIncorrect({ children }: AnswerIncorrectProps) {
  return <div className={styles.incorrect}>{children}</div>;
}

export default AnswerIncorrect;
