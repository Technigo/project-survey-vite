import { useState } from "react";
import "./RangeType.css";

export const RangeType = ({ question, handleChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectValue = (event) => {
    handleChange(event);
    const value = event.target.value;
    setSelectedValue(value);
  };

  return (
    <section className="input-section">
      <div className="question-area">
        <p>{question.questionText}</p>
      </div>
      <div className="option-area">
        <input
          className="range-bar"
          type="range"
          id={question.id}
          name={question.id}
          min="0"
          max="10"
          list="{question.id}"
          onChange={handleSelectValue}
        />

        <p className="user-rate">
          {selectedValue
            ? `Your rating: ${selectedValue} out of 10`
            : "You haven't rated this yet"}
        </p>
      </div>
    </section>
  );
};
