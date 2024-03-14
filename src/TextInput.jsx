import PropTypes from "prop-types";

export const TextInput = ({ value, updateSurveyData, valueKey, question }) => {
  // Function that will be called every time the user types in the input field.
  const handleChange = (event) => {
    // Calls the updateSurveyData function, passing the valueKey and the new input value.
    // This updates the survey's state with the user's input.
    updateSurveyData(valueKey, event.target.value);
  };

  return (
    <div className="text-imput">
      {/* Display the question as a label for the input field */}
      <label htmlFor={valueKey}>{question}</label>
      {/* Render the text input field
          - 'id' is set to valueKey to link the label to this input for accessibility.
          - 'value' represents the current value of the input, making this a controlled component.
          - 'onChange' specifies what happens when the input's value changes (when the user types). */}
      <input className="text-imput-answer" type="text" id={valueKey} value={value} onChange={handleChange} />
    </div>
  );
};

// PropTypes: to specify the types and requirements of the props our component expects.This helps catch bugs by ensuring we pass the right type of props to our component.
TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  updateSurveyData: PropTypes.func.isRequired, // 'updateSurveyData' should be a function and is required.
  valueKey: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};
