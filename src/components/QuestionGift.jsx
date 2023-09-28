import React, { useState, useEffect } from 'react';

function QuestionGift({ onAnswer, likedOption }) {
  const [selectedOption, setSelectedOption] = useState(likedOption);

  // Update the selectedOption state when the likedOption prop changes
  useEffect(() => {
    setSelectedOption(likedOption);
  }, [likedOption]);

  const options = [
    { label: 'I like receiving them the most' },
    { label: 'I like giving them the most' },
    { label: 'I like them both equally' },
  ];

  const handleRadioChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    onAnswer('', selectedOption);
  };

  return (
    <div>
      <h2 className="question-container">What do you like most about Christmas gifts?</h2>
      {options.map((option) => (
        <div key={option.label}>
          <label>
            <input
              type="radio"
              value={option.label}
              checked={selectedOption === option.label}
              onChange={handleRadioChange}
            />
            {option.label}
          </label>
        </div>
      ))}
      {selectedOption === 'both' ? (
        <p>I like them both equally</p>
      ) : (
        <p>{selectedOption}</p>
      )}
    </div>
  );
}

export default QuestionGift;


