import { LongStyleButton } from '../FormElements/LongStyleButton';
import { ShortStyleButton } from '../FormElements/ShortStyleButton';

export const QuestionComponent = ({
  // Takes in props from App.jsx here
  questions,
  currentStep,
  userAnswers,
  setUserAnswers,
  handleNextQuestion,
  completed,
}) => {

  // Function to handle changes in the user's answers
  const handleInputChange = (event) => {
    const updatedAnswer = event.target.value;
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentStep] = updatedAnswer; // Update the specific answer
      return updatedAnswers;
    });
  };

  return (
    <div className="question-section">
      {currentStep < questions.length && !completed ? (
        // Render the question based on the current step
        <form onSubmit={(event) => event.preventDefault()}>
          <p>{questions[currentStep].question}</p>
          {questions[currentStep].type === 'text' ? (
            // Render a text input for text-based questions
            <div className='first-question-section'>
              <input
                className="input-field"
                type="text"
                value={userAnswers[currentStep]}
                onChange={handleInputChange}
              />
              {currentStep === 0 ? (
                <ShortStyleButton handleNextQuestion={handleNextQuestion} />
              ) : (
                <LongStyleButton handleNextQuestion={handleNextQuestion} />
              )}
            </div>
          ) : questions[currentStep].type === 'select' ? (
            // Render a select dropdown for select-type questions
            <div>
              <select
                className="input-field"
                value={userAnswers[currentStep]}
                onChange={handleInputChange}
              >
                <option value="">Select an option</option>
                {questions[currentStep].answers.map((answer, answerIndex) => (
                  <option key={answerIndex} value={answer.value}>
                    {answer.text}
                  </option>
                ))}
              </select>
              {currentStep !== 0 && (
                <LongStyleButton handleNextQuestion={handleNextQuestion} />
              )}
            </div>
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
                    onChange={handleInputChange}
                  />
                  {answer.text}
                </label>
              ))}
              {currentStep !== 0 && (
                <LongStyleButton handleNextQuestion={handleNextQuestion} />
              )}
            </div>
          )}
        </form>
      ) : (
        <div>
          {/* Display a "Thank you for completing the form" message and, if completed, a LongStyleButton */}
          <p>Thank you for completing the form.</p>
          {completed && <LongStyleButton />}
        </div>
      )}
    </div>
  );
};