import PropTypes from "prop-types";

export const SurveySummary = ({ surveyData, steps }) => {
  return (
    <div>
      <h2>Survey Summary</h2>
      <ul>
        {steps.map((step) => (
          <li key={step.valueKey}>
            <strong>{step.question}</strong>:{" "}
            {surveyData[step.valueKey] || "Not answered"}
          </li>
        ))}
      </ul>
    </div>
  );
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
