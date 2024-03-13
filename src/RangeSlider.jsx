import PropTypes from "prop-types";

// Define a functional component named RangeSlider that takes props.
export const RangeSlider = ({
  value, // Current value of the slider
  updateSurveyData, // Function to update survey data with the new value
  valueKey, // Key to identify which survey data to update
  question, // Text for the label/question above the slider
  min, // Minimum value for the slider
  max, // Maximum value for the slider
  step, // Step increment for the slider
}) => {
  // Function to handle changes in slider value.
  // Converts the string value of the event target to an integer.
  const handleChange = (event) => {
    updateSurveyData(valueKey, parseInt(event.target.value, 10));
  };

  // Render the RangeSlider component.
  return (
    <div className="range-slider">
      {/* Display the question as a label for the slider */}
      <label htmlFor={valueKey}>{question}</label>
      {/* Render the range input with props to control its configuration */}
      <input
        type="range" // Sets the input type to a range slider
        id={valueKey} // Associates the label with this input
        value={value} // Current value of the slider, making this a controlled component
        min={min} // Minimum value for the slider
        max={max} // Maximum value for the slider
        step={step} // Step increment for the slider
        onChange={handleChange} // Calls handleChange when the slider value changes
      />
      {/* Display the current value of the slider */}
      <div>Value: {value}</div>
    </div>
  );
};

// Use PropTypes to specify the types and requirements of props the component expects.
RangeSlider.propTypes = {
  value: PropTypes.number.isRequired, // value must be a number and is required
  updateSurveyData: PropTypes.func.isRequired, // updateSurveyData must be a function and is required
  valueKey: PropTypes.string.isRequired, // valueKey must be a string and is required
  question: PropTypes.string.isRequired, // question must be a string and is required
  min: PropTypes.number.isRequired, // min must be a number and is required
  max: PropTypes.number.isRequired, // max must be a number and is required
  step: PropTypes.number.isRequired, // step must be a number and is required
};
