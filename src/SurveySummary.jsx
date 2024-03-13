import PropTypes from "prop-types";
import "./SurveyForm.css"

// Define a functional component named SurveySummary that takes props.
export const SurveySummary = ({ surveyData, steps }) => {
  // Render the SurveySummary component.
  return (
    <div className="summary">
      {/* Display the heading for the survey summary */}
      <h2>You're on fire!</h2>
      {/* List each question and its corresponding answer from the survey */}
      <ul>
        {/* Loop through each step of the survey to display questions and answers */}
        {steps.map((step) => (
          // Create a list item for each step with a unique key
          <li key={step.valueKey}>
            {/* Display the question */}
            <strong>{step.question}</strong>:{" "}
            {/* Display the answer from surveyData. If no answer is found, display "Not answered". */}
            {surveyData[step.valueKey] || "Not answered"}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Use PropTypes to specify the expected types of props the component accepts.
SurveySummary.propTypes = {
  surveyData: PropTypes.object.isRequired, // Expect surveyData to be an object and required.
  steps: PropTypes.arrayOf(
    // Expect steps to be an array of objects, each containing a valueKey and question string.
    PropTypes.shape({
      valueKey: PropTypes.string.isRequired, // Each step must have a valueKey (unique identifier).
      question: PropTypes.string.isRequired, // Each step must have a question.
    })
  ).isRequired, // The steps array is required.
};

/*
Why we write it like this and why it's needed:
- The SurveySummary component is designed to dynamically display the results of a survey.
- We pass in 'surveyData', which contains the responses, and 'steps', which contains the questions and keys.
- By mapping over 'steps', we ensure each question is listed alongside its response, providing a clear summary.
- PropTypes are used to enforce that the correct data types are passed to our component, preventing bugs and making the code easier to understand and debug.
- This dynamic approach allows the SurveySummary component to be flexible and reusable for different surveys.
*/
