import React, { useState } from 'react';
import { SubmitButton } from './FormElements/SubmitButton';

export const Questions = ({ questions }) => {
    // State to track the current question step, user answers, and completion status
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [completed, setCompleted] = useState(false);

  // Function to handle changes in the user's answers
  const handleUserAnswerChange = (event) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentStep] = event.target.value;
    setUserAnswers(updatedAnswers);
  };

  // Function to handle moving to the next question or completing the form
  const handleNextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // All questions answered, mark the form as completed
      setCompleted(true);
    }
  };

  return (
    <div className="question-section">
      {currentStep < questions.length && !completed ? (
        <form onSubmit={(event) => event.preventDefault()}>
            {/* Display the current question */}
          <p>{questions[currentStep].question}</p>
          {questions[currentStep].type === 'text' ? (
            // Render a text input for text-based questions
            <input
              className="input-field"
              type="text"
              value={userAnswers[currentStep]}
              onChange={handleUserAnswerChange}
            />
          ) : questions[currentStep].type === 'select' ? (
            // Render a select dropdown for select-type questions
            <select
              className="input-field"
              value={userAnswers[currentStep]}
              onChange={handleUserAnswerChange}
            >
              <option value="">Select an option</option>
              {questions[currentStep].answers.map((answer, answerIndex) => (
                <option key={answerIndex} value={answer.value}>
                  {answer.text}
                </option>
              ))}
            </select>
          ) : (
            // Render radio buttons for radio-type questions
            <div className="answers-section">
              {questions[currentStep].answers.map((answer, answerIndex) => (
                <label key={answerIndex}>
                  <input
                    type="radio"
                    name={`question-${currentStep}`}
                    value={answer.value}
                    checked={userAnswers[currentStep] === answer.value}
                    onChange={handleUserAnswerChange}
                  />
                  {answer.text}
                </label>
              ))}
            </div>
          )}

 {/* Display a "Next Question" or "Submit" button based on the current step */}
         {currentStep < questions.length - 1 ? (
         <button className="submit-btn next-question" onClick={handleNextQuestion}>Next Question</button>
         ) : (
       <button onClick={handleNextQuestion}>Submit</button>
         )}
        </form>
      ) : (
        <div>
{/* Display a "Thank you for completing the form" message and, if completed, a SubmitButton OBS här kan det absolut behövas ändringar */}
          <p>Thank you for completing the form.</p>
          {completed && <SubmitButton />}
        </div>
      )}
    </div>
  );
};


