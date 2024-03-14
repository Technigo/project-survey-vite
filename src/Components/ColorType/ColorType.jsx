import { useState } from "react";

export const ColorType = ({ question, handleChange }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    handleChange(event);
  };

  return (
    <section className={`input-section ${question.id}`}>
      <label htmlFor={question.id}>{question.questionText}</label>
      <input
        type="color"
        id={question.id}
        name={question.id}
        value={selectedColor}
        onChange={handleColorChange}
      />
      {selectedColor && (
        <>
          <p>Your selection:</p>
          <div
            className="color-display"
            style={{
              backgroundColor: selectedColor,
              width: "30px",
              height: "30px",
            }}
          ></div>
        </>
      )}
    </section>
  );
};
