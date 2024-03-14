import PropTypes from "prop-types";

export const SelectOption = ({
  value, // The currently selected value of the dropdown.
  updateSurveyData, // A function provided to update the state of the parent component when an option is selected.
  valueKey, // A unique key for the dropdown, used to update the correct piece of state on change.
  question, // The question or label associated with the dropdown.
  options, // An array of options that the user can select from.
}) => {
  // Function to handle changes when a new option is selected from the dropdown.
  const handleChange = (event) => {
    // Calls the updateSurveyData function, passing it the valueKey and the newly selected value.
    updateSurveyData(valueKey, event.target.value);
  };

  // The component returns a label and a dropdown (select) element.
  return (
    <div className="select-option">
      {/* Label for the dropdown, displaying the question */}
      <label htmlFor={valueKey}>{question}</label>
      {/* The dropdown itself */}
      <select
        className="select-option-answer"
        id={valueKey}
        value={value}
        onChange={handleChange}
      >
        {/* A default "select your option" choice */}
        <option value="">Select your option</option>
        {/* Map over the options array to create an <option> element for each one */}
        {options.map((option) => (
          <option key={option.valueKey} value={option.valueKey}>
            {/* Display the name of the option */}
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
    // The options must be an array of objects with specific properties.
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      valueKey: PropTypes.string.isRequired,
    })
  ).isRequired,
};
