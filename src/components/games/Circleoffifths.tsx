import { Key, useState } from "react";
import styles from "./Circleoffifths.module.css";
import QuestionIndicator from "./common/QuestionIndicator";
import Question from "./common/Question";
import Help from "./common/Help";
import HelpContent from "./common/HelpContent";
import NextQuestion from "./common/NextQuestion";
import AnswerIncorrect from "./common/AnswerIncorrect";
import AnswerCorrect from "./common/AnswerCorrect";
import { circle } from "./questions/Circle";

function Circleoffifths() {
  const [playerAnswer, setPlayerAnswer] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [score, setScore] = useState(0);

  function handlePlayerAnswer(e: React.MouseEvent<HTMLButtonElement>) {
    setPlayerAnswer((e.target as HTMLButtonElement).id);
    setShowHelp(false);
    if (
      (!circle[questionIndex].toggle &&
        (e.target as HTMLButtonElement).id === circle[questionIndex].sign) ||
      (circle[questionIndex].toggle &&
        (e.target as HTMLButtonElement).id === circle[questionIndex].flatsharp)
    ) {
      setScore(score + 1);
    }
  }

  function handleHelp() {
    setShowHelp(!showHelp);
  }

  function handleNext() {
    if (questionIndex < circle.length - 1) {
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
        {`Question ${questionIndex + 1} of ${circle.length}`}
      </QuestionIndicator>
      <Question>
        {circle[questionIndex].toggle
          ? circle[questionIndex].sign.indexOf("sharps") != -1 ||
            circle[questionIndex].sign.indexOf("flats") != -1
            ? `The 🔑 of ${circle[questionIndex].key} has ${circle[questionIndex].sign}. What are they?`
            : `The 🔑 of ${circle[questionIndex].key} has ${circle[questionIndex].sign}. What is it?`
          : `The 🔑 of ${circle[questionIndex].key} has?`}
      </Question>
      {!playerAnswer ? (
        <>
          {circle[questionIndex].options
            .split(",")
            .map((option: string, index: Key | null | undefined) => (
              <button
                id={option}
                key={index}
                className={styles.pad}
                onClick={handlePlayerAnswer}
              >
                {option}
              </button>
            ))}
          <Help handleHelp={handleHelp}>🤔</Help>
        </>
      ) : (!circle[questionIndex].toggle &&
          circle[questionIndex].sign === playerAnswer) ||
        (circle[questionIndex].toggle &&
          circle[questionIndex].flatsharp === playerAnswer) ? (
        <>
          <AnswerCorrect>
            {circle[questionIndex].toggle
              ? circle[questionIndex].flatsharp!
              : circle[questionIndex].sign}{" "}
            is Correct
          </AnswerCorrect>
          <div className={styles.pad}>
            {questionIndex === circle.length - 1
              ? `Your score is ${score} out of ${circle.length}`
              : null}
          </div>
          <NextQuestion handleNext={handleNext} />
        </>
      ) : (
        <>
          <AnswerIncorrect>
            Incorrect, the correct answer is{" "}
            {circle[questionIndex].toggle
              ? circle[questionIndex].flatsharp!
              : circle[questionIndex].sign}
          </AnswerIncorrect>
          <div className={styles.pad}>
            {questionIndex === circle.length - 1
              ? `Your score is ${score} out of ${circle.length}`
              : null}
          </div>
          <NextQuestion handleNext={handleNext} />
        </>
      )}

      {showHelp ? (
        <HelpContent>
          {circle[questionIndex].toggle &&
          circle[questionIndex].sign.indexOf("flat") != -1
            ? "Order of Flats: B E A D G C F"
            : circle[questionIndex].toggle &&
              circle[questionIndex].sign.indexOf("sharp") != -1
            ? "Order of Sharps: F C G D A E B"
            : circle[questionIndex].key.indexOf("b") != -1 &&
              !circle[questionIndex].toggle
            ? "The order in circle of fifths is C F Bb Eb Ab Db Gb Cb, try making up a mnemonic to remember"
            : circle[questionIndex].key === "F"
            ? "The order of flats in circle of fifths is C F Bb Eb Ab Db Gb Cb, try making up a mnemonic to remember"
            : circle[questionIndex].key === "C"
            ? "The key of C has no sharps or flats"
            : !circle[questionIndex].toggle
            ? "The order of sharps in circle of fifths is C G D A E B F# C#, try making up a mnemonic to remember"
            : null}
        </HelpContent>
      ) : null}
    </>
  );
}

export default Circleoffifths;
