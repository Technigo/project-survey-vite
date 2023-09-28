import { Button } from '../FormElements/Button';

export const QuestionComponent = ({
  questions, //array of questions
  currentStep, //current step/question index
  userAnswers, //array of user answers
  setUserAnswers, //function to set user answers
  handleNextQuestion, //function to handle moving to the next question
  completed, //indicates if the form is completed
  validationError,
  setValidationError,
}) => {

  // Function to handle user input changes for questions
  const handleInputChange = (event) => {
    const updatedAnswer = event.target.value; // Updates the answer with the answer typed in by the user and saves it in a variable
    setUserAnswers((prevAnswers) => { // To make sure we are working with the newest data
      const updatedAnswers = [...prevAnswers]; // Creates a copy of the previous answers array (prevAnswers) to avoid mutating the state directly
      updatedAnswers[currentStep] = updatedAnswer; // Updates answers array with the new answer, the one relevant for the current step
      return updatedAnswers;
    });
  };

  // Function to handle moving to the next question
  const handleNextQuestionClick = () => {
    // Validate user input for the name question
    if (currentStep === 0) {
      const userName = userAnswers[0];
      if (!/^[a-zA-Z\söäåÖÄÅ]+$/.test(userName)) { // A regex to allow lowecase and uppercase letters, and special characters å ä ö, tests them against the text input into the name field. The exclamationmark is there to negate the test, meaning to allow for a valid input
        setValidationError('Not a valid input, try again using only letters and spaces 🥰.');
        return; // Prevent moving to the next question
      }
    } else if (questions[currentStep].type === 'select' || questions[currentStep].type === 'radio') {
      // Check if the user has made a selection for radio and select questions
      if (!userAnswers[currentStep]) {
        setValidationError('Please select an option.');
        return; // Prevent moving to the next question
      }
    }

    // Clear validation error if it was previously set
    setValidationError('');

    // Move to the next question
    handleNextQuestion();
  };

  return (
    <div className="question-section">
      {/* Conditional rendering based on the current question and completion status */}
      {currentStep < questions.length && !completed ? (
        <form onSubmit={(event) => event.preventDefault()}>
          <p>{questions[currentStep].question}</p> {/* Display the current question */}
          {questions[currentStep].type === 'text' ? (
            /* Render input field for text type question */
            <div>
              <div className="first-question-section">
                <input
                  className="input-field"
                  type="text"
                  value={userAnswers[currentStep]}
                  onChange={handleInputChange}
                />
                {currentStep === 0 ? (
                  <Button onClick={handleNextQuestionClick} text={" "} longOrShortClass={"inline"} /> // Passes an empty string as the text on the button here, since we want the short inline button to have no text
                ) : (
                  <Button onClick={handleNextQuestionClick} text="Next" longOrShortClass={"standalone"} />
                )}
              </div>
              {validationError && <p className="validation-error">{validationError}</p>} {/* Display validation error */}
            </div>
          ) : questions[currentStep].type === 'select' ? (
            /* Render select dropdown for select type question */
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
                <Button onClick={handleNextQuestionClick} text="Next" longOrShortClass={"standalone"} />
              )}
              {validationError && <p className="validation-error">{validationError}</p>} {/* Display validation error */}
            </div>
          ) : (
            /* Render radio buttons for radio type question */
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
                <Button onClick={handleNextQuestionClick} text="Next" longOrShortClass={"standalone"} />
              )}
              {validationError && <p className="validation-error">{validationError}</p>} {/* Display validation error */}
            </div>
          )}
        </form>
      ) : (
        /* Form is completed */
        <div>
          {completed && <Button onClick={handleNextQuestion} text="Next" longOrShortClass={"standalone"} />}
        </div>
      )}
    </div>
  );
}




