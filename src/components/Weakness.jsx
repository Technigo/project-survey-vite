import { useState } from "react";
export const Weakness = ({ updateFormData, value }) => {
  const weaknessInput = (e) => {
    updateFormData("weakness", e.target.value);
    setSelectedOption(e.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="weakness">
      <label>What is your hero's weakness?</label>
      <div className="fire">
        <input
          type="radio"
          value="fire"
          onChange={weaknessInput}
          name="fire"
          checked={selectedOption === "fire"}
        />
        <label>Fire </label>
      </div>
      <div className="frail">
        <input
          type="radio"
          value="frail"
          onChange={weaknessInput}
          name="frail"
          checked={selectedOption === "frail"}
        />
        <label>Frail body </label>
      </div>
      <div className="blind">
        <input
          type="radio"
          value="blindness"
          onChange={weaknessInput}
          name="blind"
          checked={selectedOption === "blindness"}
        />
        <label>Blindness </label>
      </div>
    </div>
  );
};
