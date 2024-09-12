import styles from "./AnswerCorrect.module.css";

type AnswerCorrectProps = {
  children: string | string[] | JSX.Element | JSX.Element[];
};

function AnswerCorrect({ children }: AnswerCorrectProps) {
  return <div className={styles.correct}>{children}</div>;
}

export default AnswerCorrect;
