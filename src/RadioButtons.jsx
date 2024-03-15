import PropTypes from "prop-types";

/*Functional component to handle and update with data fom radiobutton*/
export const RadioButtons = ({value, updateSurveyData, valueKey, question, options}) => {
	// Function to handle the change event when a radio button is selected.
  // Calls updateSurveyData with the valueKey and the selected option's value.
	const handleChange = (event) => {
		updateSurveyData(valueKey, event.target.value)
	}
	return (
		<div className="radio-buttons">
			<p>{question}</p> 
			{options.map((option) => (
				<label key={option.valueKey}>
					{' '}
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
	)
};

RadioButtons.propTypes = {
  value: PropTypes.string.isRequired,
  updateSurveyData: PropTypes.func.isRequired,
  valueKey: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    // 'options' should be an array of objects, each with 'name' and 'valueKey' strings.
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      valueKey: PropTypes.string.isRequired,
    })
  ).isRequired,
};
