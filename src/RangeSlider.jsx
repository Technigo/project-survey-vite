import PropTypes from 'prop-types'
import { useState } from 'react'

// Functional component that handles and updates data from range slider.
export const RangeSlider = ({value, updateSurveyData, valueKey, question, min, max, step}) => {
	//useState-hook for slider value
	const [sliderValue, setSliderValue] = useState(value)
	// Function to handle changes in slider value.
	const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
    updateSurveyData(valueKey, newValue);
	}
	return (
		<div className="range-slider">
			<label htmlFor={valueKey}>{question}</label>
			<input
				type="range"
				id={valueKey}
				value={sliderValue} 
				min={min} 
				max={max}
				step={step}
				onChange={handleChange}
				className="slider"
			/>
			<div>Value: {value}</div>
		</div>
	)
}

RangeSlider.propTypes = {
	value: PropTypes.number.isRequired, 
	updateSurveyData: PropTypes.func.isRequired,
	valueKey: PropTypes.string.isRequired, 
	question: PropTypes.string.isRequired, 
	min: PropTypes.number.isRequired, 
	max: PropTypes.number.isRequired, 
	step: PropTypes.number.isRequired,
}