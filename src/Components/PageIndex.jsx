import { useState } from "react";
import data from "../Data/questionList.json";
import { InputSection } from "./InputSection";
import { Button } from "./index";
import { Summary } from "./index";

export const PageIndex = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [optionSummary, setOptionSummary] = useState([]);
  const [isStranger, setIsStranger] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleOptionSummary = (value) => {
    console.log(value);
    const updatedOptionSummary = [...optionSummary];
    updatedOptionSummary[currentQuestionIndex] = value;
    setOptionSummary(updatedOptionSummary);
  };

  const handleVisitor = (value) => {
    const updatedVisitorState =
      value === "A total stranger for a surprise" ? true : false;
    setIsStranger(updatedVisitorState);
    handleOptionSummary(value);
  };

  const handleStart = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const currentQuestion = data.questions[currentQuestionIndex];
  const lastQuesionIndex = data.questions.length - 1;

  return (
    <>
      {!showForm && (
        <section className="start-section">
          <h1>Welcome to the Dream Home Survey</h1>
          <button type="button" onClick={handleStart}>
            Start!
          </button>
        </section>
      )}

      {showForm && !formSubmitted && (
        <form onSubmit={handleSubmit}>
          <InputSection
            question={currentQuestion}
            index={currentQuestionIndex}
            optionSummary={optionSummary}
            setOptionSummary={setOptionSummary}
            handleOptionSummary={handleOptionSummary}
            handleVisitor={handleVisitor}
            isStranger={isStranger}
          />

          <Button
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
            currentQuestionIndex={currentQuestionIndex}
            lastQuesionIndex={lastQuesionIndex}
            isStranger={isStranger}
          />
        </form>
      )}

      {formSubmitted && (
        <Summary optionSummary={optionSummary} index={currentQuestionIndex} />
      )}
    </>
  );
};
