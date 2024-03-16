import { useState } from "react";
import { NameInput } from "./NameInput.jsx";
import { SubmitButton } from "./SubmitButton.jsx";
import { CourseInput } from "./CourseInput.jsx";
import { LevelOptions } from "./LevelOptions.jsx";
import { TextInput } from "./TextInput.jsx";
import { YesNoOption } from "./YesNoOption.jsx";
import { Summary } from "./Summary.jsx";

export const Form = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("");
  const [text, setText] = useState("");
  const [recommend, setRecommend] = useState("");
  const [showSummary, setShowSummary] = useState("");

  const isFormComplete = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };

  return showSummary ? (
    <Summary name={name} course={course} level={level} text={text} recommend={recommend} />
  ) : (
    <form onSubmit={isFormComplete}>
      <h3>How was your experience?</h3>
      <p>Help us be better and to deliver top notch courses.</p>
      <NameInput name={name} setName={setName} />
      <CourseInput course={course} setCourse={setCourse} />
      <LevelOptions level={level} setLevel={setLevel} />
      <TextInput text={text} setText={setText} />
      <YesNoOption recommend={recommend} setRecommend={setRecommend} />
      <SubmitButton />
    </form>
  );
};
