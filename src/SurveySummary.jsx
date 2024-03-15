import PropTypes from "prop-types";
import "./SurveyForm.css"

export const SurveySummary = ({ surveyData, steps }) => {
  return (
		<div className="summary">
			<h2>🔥Wow! You're on fire!🔥</h2>
			<ul>
				{steps.map((step) => (
					<li key={step.valueKey}>
						{step.question}:{' '}
						{surveyData[step.valueKey] || 'Not answered'}
					</li>
				))}
			</ul>
		</div>
	)
};

SurveySummary.propTypes = {
  surveyData: PropTypes.object.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      valueKey: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
    })
  ).isRequired, 
};