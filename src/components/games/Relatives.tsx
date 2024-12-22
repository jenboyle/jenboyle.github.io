import { useState } from "react";
import styles from "./Relatives.module.css";
import QuestionIndicator from "./common/QuestionIndicator";
import Question from "./common/Question";
import Help from "./common/Help";
import HelpContent from "./common/HelpContent";
import NextQuestion from "./common/NextQuestion";
import AnswerIncorrect from "./common/AnswerIncorrect";
import AnswerCorrect from "./common/AnswerCorrect";
import { relatives } from "./questions/Relatives";

export type RelativeType = {
  key: string;
  rel: string;
};

function Relatives() {
  const [playerAnswer, setPlayerAnswer] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [score, setScore] = useState(0);

  function handlePlayerAnswer(e: React.MouseEvent<HTMLButtonElement>) {
    setPlayerAnswer((e.target as HTMLButtonElement).id);
    setShowHelp(false);
    if ((e.target as HTMLButtonElement).id === relatives[questionIndex].rel) {
      setScore(score + 1);
    }
  }

  function handleHelp() {
    setShowHelp(!showHelp);
  }

  function handleNext() {
    if (questionIndex < relatives.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuestionIndex(0);
      setScore(0);
    }
    setPlayerAnswer("");
    setShowHelp(false);
  }
  return (
    <>
      <QuestionIndicator>
        {`Question ${questionIndex + 1} of ${relatives.length}`}
      </QuestionIndicator>
      <Question>
        What is the Relative 🔑 of {relatives[questionIndex].key}?
      </Question>
      {!playerAnswer ? (
        <>
          {relatives.map((relative: RelativeType) => (
            <button
              id={relative.key}
              key={relative.key}
              className={styles.pad}
              onClick={handlePlayerAnswer}
            >
              {relative.key}
            </button>
          ))}
          <Help handleHelp={handleHelp}>🤔</Help>
        </>
      ) : relatives[questionIndex].rel === playerAnswer ? (
        <>
          <AnswerCorrect>
            {relatives[questionIndex].rel} is Correct
          </AnswerCorrect>
          <div className={styles.pad}>
            {questionIndex === relatives.length - 1
              ? `Your score is ${score} out of ${relatives.length}`
              : null}
          </div>
          <NextQuestion handleNext={handleNext} />
        </>
      ) : (
        <>
          <AnswerIncorrect>
            Incorrect, the correct answer is {relatives[questionIndex].rel}
          </AnswerIncorrect>
          <div className={styles.pad}>
            {questionIndex === relatives.length - 1
              ? `Your score is ${score} out of ${relatives.length}`
              : null}
          </div>
          <NextQuestion handleNext={handleNext} />
        </>
      )}

      {showHelp ? (
        <HelpContent>
          {relatives[questionIndex].key.indexOf("Major") != -1
            ? "If you are in a major key move down 3 semitones to find the relative minor."
            : "If you are in a minor key move up 3 semitones to find the relative major."}
        </HelpContent>
      ) : null}
    </>
  );
}

export default Relatives;
