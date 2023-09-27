import React, { useState, useEffect } from 'react';


function QuestionLikeMost({ onAnswer, option }) {
  const options = [
    'Food',
    'The spirit of Christmas',
    'The gifts',
    'Spending time with family',
    'A few days off from work',
    'Relaxing',
    'Decorating the tree',
  ];

  const handleCheckboxChange = (event) => {
    const selectedOption = event.target.value;
    onAnswer('option', selectedOption);
  };

  return (
    <div>
      <h2 className="question-container">What do you like most about Christmas?</h2>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              value={option}
              checked={option === option} // This needs to be updated
              onChange={handleCheckboxChange}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}

export default QuestionLikeMost;
