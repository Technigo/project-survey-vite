import React, { useState } from 'react';

function QuestionGift({ onAnswer }) {
  const [likedOption, setLikedOption] = useState(''); // Initialize with an empty string

  const options = [
    { value: 'receiving', label: 'I like receiving them the most' },
    { value: 'buying', label: 'I like giving them the most' },
    { value: 'both', label: 'I like them both equally' },
  ];

  const handleRadioChange = (event) => {
    const selectedOption = event.target.value;
    setLikedOption(selectedOption);
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

export default QuestionGift;
