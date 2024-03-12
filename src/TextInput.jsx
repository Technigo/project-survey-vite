import PropTypes from "prop-types";

// Define a functional component named TextInput. This component is used for text input fields in a form.
export const TextInput = ({ value, updateSurveyData, valueKey, question }) => {
  // Function that will be called every time the user types in the input field.
  const handleChange = (event) => {
    // Calls the updateSurveyData function, passing the valueKey and the new input value.
    // This updates the survey's state with the user's input.
    updateSurveyData(valueKey, event.target.value);
  };

  // Render the text input component.
  return (
    <div>
      {/* Display the question as a label for the input field */}
      <label htmlFor={valueKey}>{question}</label>
      {/* Render the text input field
          - 'id' is set to valueKey to link the label to this input for accessibility.
          - 'value' represents the current value of the input, making this a controlled component.
          - 'onChange' specifies what happens when the input's value changes (when the user types). */}
      <input type="text" id={valueKey} value={value} onChange={handleChange} />
    </div>
  );
};

// Here we use PropTypes to specify the types and requirements of the props our component expects.
// This helps catch bugs by ensuring we pass the right type of props to our component.
TextInput.propTypes = {
  value: PropTypes.string.isRequired, // 'value' should be a string and is required.
  updateSurveyData: PropTypes.func.isRequired, // 'updateSurveyData' should be a function and is required.
  valueKey: PropTypes.string.isRequired, // 'valueKey' should be a string and is used to identify which piece of state to update.
  question: PropTypes.string.isRequired, // 'question' should be a string and is the text that will be displayed as the label.
};
