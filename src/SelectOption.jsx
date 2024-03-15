import PropTypes from "prop-types";

//Functional component to store and update users input data for dropdown
export const SelectOption = ({value, updateSurveyData, valueKey, question, options}) => {
  // Function to handle changes when a new option is selected from the dropdown.
  const handleChange = (event) => {
    updateSurveyData(valueKey, event.target.value);
  };
  return (
    <div className="select-option">
      <label htmlFor={valueKey}>{question}</label>
      <select
        className="select-option-answer"
        id={valueKey}
        value={value}
        onChange={handleChange}
      >
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
  updateSurveyData: PropTypes.func.isRequired, // The function to update state must be provided.
  valueKey: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      valueKey: PropTypes.string.isRequired,
    })
  ).isRequired,
};
