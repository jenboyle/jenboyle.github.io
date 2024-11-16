import { useState } from "react";
import { cubaseTips } from "./cubaseTips";
import GroovyButton from "./general/GroovyButton";
import style from "./MixAndMaster.module.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export interface TopicButtonProps {
  topicNum: number;
  onClick: React.Dispatch<React.SetStateAction<number>>;
}

function TopicButton({ topicNum, onClick }: TopicButtonProps) {
  return (
    <GroovyButton
      handleClick={() => onClick(topicNum)}
      customStyles={style.overridegeneralbtn}
    >
      {cubaseTips[topicNum].topic}
    </GroovyButton>
  );
}

function MixAndMaster() {
  const [activeTopic, setActiveTopic] = useState(0);
  const [tip, setTip] = useState(0);

  function handleNext() {
    //if (topic < cubaseTips.length - 1) {
    if (tip < cubaseTips[activeTopic].tips.length - 1) {
      setTip(tip + 1);
    } else {
      setTip(0);
    }
  }

  function handlePrevious() {
    if (tip > 0) {
      setTip(tip - 1);
    }
  }
  //{tip > 0 ? <button onClick={() => handlePrevious()}>⬅️</button> : null}

  return (
    <>
      {cubaseTips.map((topic, i) => (
        <TopicButton
          key={topic.topic}
          topicNum={i}
          onClick={() => {
            setActiveTopic(i);
            setTip(0);
          }}
        />
      ))}

      <h4>{cubaseTips[activeTopic].topic}</h4>

      <h5 className={style.fixedHeight}>
        {cubaseTips[activeTopic].tips[tip].tip}
      </h5>

      <GroovyButton
        customStyles={style.overridegeneralbtn}
        handleClick={() => handlePrevious()}
        disabled={tip < 1}
      >
        <HiChevronLeft />
      </GroovyButton>
      <GroovyButton
        customStyles={style.overridegeneralbtn}
        handleClick={() => handleNext()}
      >
        <HiChevronRight />
      </GroovyButton>
    </>
  );
}
export default MixAndMaster;
