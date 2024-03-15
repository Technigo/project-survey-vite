import { useState } from "react";
import "./RangeSlider.css";

export const RangeSlider = () => {
  const [value, setValue] = useState(3); // Default value

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    console.log("New value:", newValue); // You can handle value change here
  };

  return (
    <div className="slider-container">
      <label className="slider-label">
        How important is music in your daily life? Rate from 1 to 5.
      </label>
      <input
        className="slider"
        type="range"
        min={1}
        max={5}
        step={1}
        value={value}
        onChange={handleChange}
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
