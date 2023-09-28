import React, { useState } from 'react';
import "./app.css";
import questions from "./questions.json"; // Questions data saved in a JSON format for easy access throughout the code, is imported here
import { Header } from "./components/Header"; // Header including the Quizname and Icon
import { QuestionComponent } from './components/Questions/QuestionComponent'; // Logic for displaying questions
import { AnswersSummary } from './components//Answers/AnswersSummary'; // AnswersSummary component

// Main component that renders all the Quiz Components
export const App = () => {
  // State to track the current question step, user answers, and completion status
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [completed, setCompleted] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  // Function to handle moving to the next question or completing the form
  const handleNextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // All questions answered, mark the form as completed
      setCompleted(true);
      setShowLoading(true);
      // Simulate a delay before showing the answer
      setTimeout(() => {
        setShowLoading(false);
      }, 3000);
    }
  };

  return (
    <section className="main-section">
      <Header />
      {!completed ? (
        // Passes all neccessary data points to QuestionComponent
        <QuestionComponent
          questions={questions} // All questionsdata is passed on
          currentStep={currentStep} // Currentstep information is passed on
          userAnswers={userAnswers} // State of usersAnswers is passed on
          setUserAnswers={setUserAnswers} // Function to handle the userAnswers is passed on
          handleNextQuestion={handleNextQuestion} // Funtion to handle what happens when user clicks for next stage is passed on
          completed={completed} // Completed state is passed on
        />
      ) : (
        // Display the loading or answer summary section after completing the form
        <div id="answers-summary">
          {showLoading ? (
            // Display a loading message or icon here
            <div className="loading">
              <p>Your answer is being prepared...</p>
              {/* You can replace this with your loading icon */}
              <img src="./icons/tea.gif" alt="Loading tea-cup" width="70px" />
            </div>
          ) : (
            <AnswersSummary userAnswers={userAnswers} questions={questions} />
          )}
        </div>
      )}
    </section>
  );
};