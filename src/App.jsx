import React, { useState } from 'react';
import "./app.css";
import questions from "./questions.json"; // Questions data saved in a JSON format for easy access throughout the code, is imported here
import { Header } from "./components/Header"; // Header including the Quizname and Icon
import { Questions } from "./components/Questions"; // Questions and answers, we might need to restructure this later
// import { InputField } from "./components/FormElements/InputField"; // I first put them in here, in the App, but then moved them out. Keeping them here just in case.
// import { SubmitButton } from "./components/FormElements/SubmitButton"; // I first put them in here, in the App, but then moved them out. Keeping them here just in case.

// Main component that renders all the Quiz Components
export const App = () => {
const [currentStep, setCurrentStep] = useState(0);

const handleNextClick = () => {
  setCurrentStep(currentStep + 1);
}

  return (
    <section className="main-section">
      <Header />
      <Questions questions={questions} />
    </section>
    );
};
