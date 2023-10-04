import React, { useState, useEffect } from "react";

function QuestionLikeMost({ onAnswer, option }) {
  const options = [
    "The food",
    "The spirit of Christmas",
    "The gifts",
    "Spending time with friends and family",
    "Getting few days off from work",
    "Decorating the tree",
  ];

  // Initialize local state for tracking the checked status
  const [checkedOptions, setCheckedOptions] = useState([]);

  useEffect(() => {
    // Update the checked options when the 'option' prop changes
    setCheckedOptions(Array.isArray(option) ? option : [option]);
  }, [option]);

  const handleCheckboxChange = (event) => {
    const selectedOption = event.target.value;
    let updatedOptions = [...checkedOptions];

    if (updatedOptions.includes(selectedOption)) {
      updatedOptions = updatedOptions.filter((item) => item !== selectedOption);
    } else {
      updatedOptions.push(selectedOption);
    }

    setCheckedOptions(updatedOptions);
    onAnswer(updatedOptions);
  };

  return (
    <div>
      <h2 className="question-container">
        What do you like most about Christmas?
      </h2>
      {options.map((item) => (
        <div key={item}>
          <label>
            <input
              type="checkbox"
              value={item}
              checked={checkedOptions.includes(item)}
              onChange={handleCheckboxChange}
            />
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}

export default QuestionLikeMost;
