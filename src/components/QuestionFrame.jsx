import { useState } from "react";
import Header from "./Header";
import Question from "./Question";
import NextButton from "./NextButton";
import { questions } from "../question.json";

const QuestionFrame = () => {
  console.log(questions);
  const [clicked, setClicked] = useState(false);
  const [qNum, setQNum] = useState(0);

  const handleChange = () => {
    setClicked(!clicked);
    setQNum(qNum + 1);
  };

  return (
    <div>
      <Header question={questions[qNum]} />
      <Question />
      <NextButton onClick={handleChange} />
    </div>
  );
};

export default QuestionFrame;
