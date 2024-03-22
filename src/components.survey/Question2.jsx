import { useState } from "react";
import { BackNextButtons } from "./BackNextButtons";

export const Question2 = ({ onNext, onBack, setFormData }) => {
  const [second, setSecond] = useState("");

  const handleYesClick = () => {
    setSecond("yes");
    setFormData((prevFormData) => ({
      ...prevFormData,
      answer2: "Yes", // Update answer2 in form data
    }));
  };

  const handleNoClick = () => {
    setSecond("no");
    setFormData((prevFormData) => ({
      ...prevFormData,
      answer2: "No", // Update answer2 in form data
    }));
  };

  return (
    <div className="container-question">
      <label className="question" htmlFor="question2">
        Have you ever accidentally hyperfocused on something for hours,
        forgetting to eat, sleep, or even blink?
      </label>
      <div>
        <button
          className={second === "yes" ? "selected" : ""}
          onClick={handleYesClick}
        >
          Yes, so many times!
        </button>
        <button
          className={second === "no" ? "selected" : ""}
          onClick={handleNoClick}
        >
          Nope, I've never been so lost.
        </button>
      </div>
      <BackNextButtons onNext={onNext} onBack={onBack} />
    </div>
  );
};
