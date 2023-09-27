import React, { useState, useEffect } from 'react';

function QuestionGift({ onAnswer, likedOption }) {
  const [selectedOption, setSelectedOption] = useState(likedOption);

  // Update the selectedOption state when the likedOption prop changes
  useEffect(() => {
    setSelectedOption(likedOption);
  }, [likedOption]);

  const options = [
    { value: 'receiving', label: 'I like receiving them the most' },
    { value: 'buying', label: 'I like giving them the most' },
    { value: 'both', label: 'I like them both equally' },
  ];

  const handleRadioChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    onAnswer('likedOption', selectedOption);
  };

  return (
    <div>
      <h2 className="question-container">What do you like most about Christmas gifts?</h2>
      {options.map((option) => (
        <div key={option.value}>
          <label>
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleRadioChange}
            />
            {option.label}
          </label>
        </div>
      ))}
      <p>You like: {selectedOption === 'both' ? 'Receiving gifts and buying gifts' : selectedOption}</p>
    </div>
  );
}

export default QuestionGift;
