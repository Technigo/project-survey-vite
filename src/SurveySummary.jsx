import PropTypes from "prop-types";
import "./SurveyForm.css"

export const SurveySummary = ({ surveyData, steps }) => {
  return (
		<div className="summary">
			<h2>🔥You're on fire!🔥</h2>
			<ul>
				{/* Loop through each step of the survey to display questions and answers */}
				{steps.map((step) => (
					// Create a list item for each step with a unique key
					<li key={step.valueKey}>
						{/* Display the question */}
						{step.question}:{' '}
						{/* Display the answer from surveyData. If no answer is found, display "Not answered". */}
						{surveyData[step.valueKey] || 'Not answered'}
					</li>
				))}
			</ul>
		</div>
	)
};

SurveySummary.propTypes = {
  surveyData: PropTypes.object.isRequired, // Expect surveyData to be an object and required.
  steps: PropTypes.arrayOf(
    // Expect steps to be an array of objects, each containing a valueKey and question string.
    PropTypes.shape({
      valueKey: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
    })
  ).isRequired, 
};