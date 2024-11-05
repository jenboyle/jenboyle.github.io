import { useState } from "react";
import styles from "./Relatives.module.css";
import QuestionIndicator from "./common/QuestionIndicator";
import Question from "./common/Question";
import Help from "./common/Help";
import HelpContent from "./common/HelpContent";
import NextQuestion from "./common/NextQuestion";
import AnswerIncorrect from "./common/AnswerIncorrect";
import AnswerCorrect from "./common/AnswerCorrect";
import QuestionImage from "./common/QuestionImage";
import AnswerChecker from "./common/AnswerChecker";

type Choice = {
  choice: string;
};

export type QuestionType = {
  question: string;
  answer: string;
  help: string;
  img?: string;
  multi?: string;
  choices?: Choice[];
};

interface StandardGameProps {
  questions: QuestionType[];
}

function StandardGame({ questions }: StandardGameProps) {
  const [playerAnswer, setPlayerAnswer] = useState("");
  const [playerAnswerSubmitted, setPlayerAnswerSubmitted] = useState(false);
  const [currentResult, setCurrentResult] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [score, setScore] = useState(0);
  const [radio, setRadio] = useState(false);

  function handlePlayerAnswer(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayerAnswer(e.target.value);
  }

  function handlePlayerAnswerSubmitted() {
    setPlayerAnswerSubmitted(true);
    setShowHelp(false);

    if (radio) {
      if (playerAnswer === questions[questionIndex].answer) {
        setScore(score + 1);
        setCurrentResult(true);
        return true;
      }
    } else if (AnswerChecker(playerAnswer, questions[questionIndex].answer)) {
      setScore(score + 1);
      setCurrentResult(true);
      return true;
    }
    setCurrentResult(false);
    return false;
  }

  function handleHelp() {
    setShowHelp(!showHelp);
  }

  function handleNext() {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuestionIndex(0);
      setScore(0);
    }
    setPlayerAnswer("");
    setShowHelp(false);
    setPlayerAnswerSubmitted(false);
    setCurrentResult(false);
  }
  return (
    <>
      <QuestionIndicator>
        {`Question ${questionIndex + 1} of ${questions.length}`}
      </QuestionIndicator>
      <Question>{questions[questionIndex].question}</Question>
      {!playerAnswerSubmitted ? (
        <>
          {questions[questionIndex].img ? (
            <QuestionImage src={questions[questionIndex].img} />
          ) : null}
          {questions[questionIndex].choices ? (
            questions[questionIndex].choices.map((choice, index) => (
              <div
                key={choice.choice}
                onClick={() => {
                  setPlayerAnswer(`${index}`);
                  setRadio(true);
                }}
              >
                <input
                  key={choice.choice}
                  type="radio"
                  name="answers"
                  value={index}
                ></input>
                {choice.choice}
              </div>
            ))
          ) : (
            <input
              id="schoolText"
              type="text"
              onChange={handlePlayerAnswer}
            ></input>
          )}
          <button className={styles.pad} onClick={handlePlayerAnswerSubmitted}>
            Check Answer
          </button>
          <Help handleHelp={handleHelp} />
        </>
      ) : currentResult ? (
        <>
          <AnswerCorrect>
            Correct. {questions[questionIndex].help}
          </AnswerCorrect>
          <div className={styles.pad}>
            {questionIndex === questions.length - 1
              ? `Your score is ${score} out of ${questions.length}`
              : null}
          </div>
          <NextQuestion handleNext={handleNext} />
        </>
      ) : (
        <>
          <AnswerIncorrect>
            Incorrect. {questions[questionIndex].help}
          </AnswerIncorrect>
          <div className={styles.pad}>
            {questionIndex === questions.length - 1
              ? `Your score is ${score} out of ${questions.length}`
              : null}
          </div>
          <NextQuestion handleNext={handleNext} />
        </>
      )}

      {showHelp ? (
        <HelpContent>{questions[questionIndex].help}</HelpContent>
      ) : null}
    </>
  );
}

export default StandardGame;
