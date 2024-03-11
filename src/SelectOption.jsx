import PropTypes from "prop-types";

export const SelectOption = ({
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
      <label htmlFor={valueKey}>{question}</label>
      <select id={valueKey} value={value} onChange={handleChange}>
        <option value="">Select your option</option>
        {options.map((option) => (
          <option key={option.valueKey} value={option.valueKey}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectOption.propTypes = {
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
