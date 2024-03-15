import PropTypes from "prop-types";

export const TextInput = ({ value, updateSurveyData, valueKey, question }) => {
  // Function that will be called every time the user types in the input field.
  const handleChange = (event) => {
    updateSurveyData(valueKey, event.target.value);
  };

  return (
    <div className="text-imput">
      <label htmlFor={valueKey}>{question}</label>
      <input className="text-imput-answer" type="text" id={valueKey} value={value} onChange={handleChange} />
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  updateSurveyData: PropTypes.func.isRequired, 
  valueKey: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};
