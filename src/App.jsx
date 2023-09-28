import React, { useState } from 'react';
import "./app.css";
import questions from "./questions.json"; // Questions data saved in a JSON format for easy access throughout the code, is imported here
import { Header } from "./components/Header"; // Header including the Quizname and Icon
import { QuestionComponent } from './components/Questions/QuestionComponent'; // Logic for displaying questions
import { AnswersSummary } from './components//Answers/AnswersSummary'; // AnswersSummary component
import { ProgressBar } from './components/Questions/ProgressBar';

// Main component that renders all the Quiz Components
export const App = () => {
  // State to track the current question step, user answers, and completion status
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [completed, setCompleted] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [restart, setRestart] = useState(false);

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

  // Function that makes sure all states are neutralized for restart
  const handleRestart = () => {
    setCurrentStep(0); // To keep track of the current step, set to 0 in the beginning
    setUserAnswers(Array(questions.length).fill('')); // Updates state of userAnswers, so that we can keep track of the users answers to each question
    setCompleted(false); // To keep track of if quiz is completed or not
    setShowLoading(false); // To keep track of if the loading section is to be shown
    setRestart(false); // To keep track of if quiz needs to be restarted or not.
  }

  return (
    <section className="main-section">
      <Header />
      {!completed ? (
        // Passes all neccessary data points to QuestionComponent
        <section>
          <QuestionComponent
            questions={questions} // All questionsdata is passed on
            currentStep={currentStep} // Currentstep information is passed on
            userAnswers={userAnswers} // State of usersAnswers is passed on
            setUserAnswers={setUserAnswers} // Function to handle the userAnswers is passed on
            handleNextQuestion={handleNextQuestion} // Function to handle what happens when user clicks for next stage is passed on
            setValidationError={setValidationError} // Function to handle what happens if enters a faulty value
            validationError={validationError} // Passes on current state of validationError
            completed={completed} // Completed state is passed on
          />
          <ProgressBar currentStep={currentStep} questionsLength={questions.length} />
        </section>
      ) : (
        // Display the loading or answer summary section after completing the form
        <section id="answers-summary">
          {showLoading ? (
            // Display a loading message or icon here
            <div className="loading">
              <p>Your answer is being prepared...</p>
              {/* You can replace this with your loading icon */}
              <img src="./icons/tea.gif" alt="Loading tea-cup" width="70px" />
            </div>
          ) : (
            /* Component to show summary of answers */
            <AnswersSummary userAnswers={userAnswers} handleRestart={handleRestart} />
          )}
        </section>
      )}
    </section>
  );
};