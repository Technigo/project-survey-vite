import { useState } from "react";
export const Weakness = ({ updateFormData, value }) => {
  const weaknessInput = (e) => {
    updateFormData("weakness", e.target.value);
    setSelectedOption(e.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <input
        type="radio"
        value="fire"
        onChange={weaknessInput}
        name="fire"
        checked={selectedOption === "fire"}
      />
      <label>Fire </label>
      <input
        type="radio"
        value="frail"
        onChange={weaknessInput}
        name="frail"
        checked={selectedOption === "frail"}
      />
      <label>Frail body </label>
      <input
        type="radio"
        value="blind"
        onChange={weaknessInput}
        name="blind"
        checked={selectedOption === "blind"}
      />
      <label>Blindness </label>
    </div>
  );
};
