import React, { useState, useEffect } from "react";

function QuestionCelebrate({ onAnswer, celebrateChristmas }) {
  const [selectedOption, setSelectedOption] = useState(celebrateChristmas);

  // Update the selectedOption state when the celebrateChristmas prop changes
  useEffect(() => {
    setSelectedOption(celebrateChristmas);
  }, [celebrateChristmas]);

  const handleRadioChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    onAnswer(selectedOption);
  };

  return (
    <div>
      <h2>Do you celebrate Christmas?</h2>
      <div>
        <label>
          <input
            type="radio"
            value="Yes"
            checked={selectedOption === "Yes"}
            onChange={handleRadioChange}
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="No"
            checked={selectedOption === "No"}
            onChange={handleRadioChange}
          />
          No
        </label>
      </div>
      {/* Conditional message for non-celebrators */}
      {selectedOption === "No" && (
        <p>
          This survey is not for you. Thank you for your time and have a lovely
          holiday!
        </p>
      )}
    </div>
  );
}

export default QuestionCelebrate;
