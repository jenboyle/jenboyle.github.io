import { useState } from "react";
import QuestionIndicator from "./common/QuestionIndicator";
import Question from "./common/Question";
import NextQuestion from "./common/NextQuestion";
import QuestionImage from "./common/QuestionImage";
import { notations } from "./questions/NotationEasy";

function Notationeasy() {
  const [questionIndex, setQuestionIndex] = useState(0);

  function handleNext() {
    if (questionIndex < notations.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuestionIndex(0);
    }
  }
  return (
    <>
      <QuestionIndicator>
        {`Question ${questionIndex + 1} of ${notations.length}`}
      </QuestionIndicator>
      <Question>{notations[questionIndex].question}</Question>

      <QuestionImage src={notations[questionIndex].image}></QuestionImage>

      <NextQuestion handleNext={handleNext} />
    </>
  );
}

export default Notationeasy;
