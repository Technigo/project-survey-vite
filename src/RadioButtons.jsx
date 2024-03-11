import PropTypes from "prop-types";

export const RadioButtons = ({
  value,
  updateSurveyData,
  valueKey,
  question,
  options,
}) => {
  const handleChange = (event) => {
    updateSurveyData(valueKey, event.target.value);
  };

  return (
    <div>
      <p>{question}</p>
      {options.map((option) => (
        <label key={option.valueKey}>
          <input
            type="radio"
            name={valueKey}
            value={option.valueKey}
            checked={value === option.valueKey}
            onChange={handleChange}
          />
          {option.name}
        </label>
      ))}
    </div>
  );
};

RadioButtons.propTypes = {
  value: PropTypes.string.isRequired,
  updateSurveyData: PropTypes.func.isRequired,
  valueKey: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      valueKey: PropTypes.string.isRequired,
    })
  ).isRequired,
};
