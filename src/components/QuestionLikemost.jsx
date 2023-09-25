//As peoplewhat they like most about christmas, checkbox for example food, the spririt, gifts, spending time with family etc etc
import React, { useState } from 'react';

function QuestionLikeMost() {
  const [likedOptions, setLikedOptions] = useState([]);

  const options = [
    'Food',
    'The spirit',
    'The gifts',
    'Spending time with family',
    'A few days off from work',
    'Relaxing',
    'Decorating the tree',
  ];

  const handleCheckboxChange = (event) => {
    const option = event.target.value;
    if (likedOptions.includes(option)) {
      // If the option is already selected, remove it
      setLikedOptions(likedOptions.filter((item) => item !== option));
    } else {
      // If the option is not selected, add it
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
      <p>You like: {likedOptions.join(', ')}</p>
    </div>
  );
}

export default QuestionLikeMost;