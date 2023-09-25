//What do you like most? Receiving gifts, buying gifts, i like them both, radiobuttons
import React, { useState } from 'react';

function QuestionLikeMost() {
  const [likedOption, setLikedOption] = useState('both'); // Default option

  const options = [
    { value: 'receiving', label: 'I like receiving them the most' },
    { value: 'buying', label: 'I like giving them the most' },
    { value: 'both', label: 'I like them bothequally' },
  ];

  const handleRadioChange = (event) => {
    setLikedOption(event.target.value);
  };

  return (
    <div>
      <h2 className="question-container">What do you like most about christmas gifts?</h2>
      {options.map((option) => (
        <div key={option.value}>
          <label>
            <input
              type="radio"
              value={option.value}
              checked={likedOption === option.value}
              onChange={handleRadioChange}
            />
            {option.label}
          </label>
        </div>
      ))}
      <p>You like: {likedOption === 'both' ? 'Receiving gifts and buying gifts' : likedOption}</p>
    </div>
  );
}

export default QuestionLikeMost;