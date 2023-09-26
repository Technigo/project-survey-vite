import React, { useState } from 'react';

function QuestionLikeMost({ onAnswer }) {
  const [likedOptions, setLikedOptions] = useState([]);

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
    const option = event.target.value;
    if (likedOptions.includes(option)) {
      setLikedOptions(likedOptions.filter((item) => item !== option));
    } else {
      setLikedOptions([...likedOptions, option]);
    }
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
              checked={likedOptions.includes(option)}
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

