import PropTypes from "prop-types";

export const RangeSlider = ({
  value,
  updateSurveyData,
  valueKey,
  question,
  min,
  max,
  step,
}) => {
  const handleChange = (event) => {
    updateSurveyData(valueKey, parseInt(event.target.value, 10));
  };

  return (
    <div>
      <label htmlFor={valueKey}>{question}</label>
      <input
        type="range"
        id={valueKey}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
      />
      <div>Value: {value}</div>
    </div>
  );
};

RangeSlider.propTypes = {
  value: PropTypes.number.isRequired,
  updateSurveyData: PropTypes.func.isRequired,
  valueKey: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};
