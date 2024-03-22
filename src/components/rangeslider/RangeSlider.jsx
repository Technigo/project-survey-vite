import { useState } from "react";
import "./RangeSlider.css";

export const RangeSlider = ({ handleChange }) => {
  const [value, setValue] = useState(3); // Default value
  const onChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    handleChange(event);
  };

  return (
    <div className="slider-container">
      <label className="slider-label">
        <span className="number">5.</span>
        <span className="question">
          How important is music in your daily life? Rate from 1 to 5.
        </span>
      </label>
      <input
        className="slider"
        type="range"
        min={1}
        max={5}
        step={1}
        value={value}
        onChange={onChange}
        list="tickmarks"
      />
      <datalist id="tickmarks">
        {[1, 2, 3, 4, 5].map((tick) => (
          <option key={tick} value={tick} label={tick} />
        ))}
      </datalist>
    </div>
  );
};
