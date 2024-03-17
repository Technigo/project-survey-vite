import { useState } from "react";
import "./ColorType.css";

export const ColorType = ({ question, handleChange }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    handleChange(event);
  };

  return (
    <section className="input-section">
      <label className="question-area" htmlFor={question.id}>
        {question.questionText}
      </label>
      <div className="color-option-area">
        <p>Click the color cube to select</p>
        <input
          type="color"
          id={question.id}
          name={question.id}
          value={selectedColor}
          className="color-wheel"
          aria-label="Choose color"
          onChange={handleColorChange}
        />
      </div>
    </section>
  );
};
