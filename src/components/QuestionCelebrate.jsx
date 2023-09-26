import React, { useState } from 'react';

function QuestionCelebrate({ onAnswer }) {
  const [celebrateChristmas, setCelebrateChristmas] = useState('');

  const handleRadioChange = (event) => {
    setCelebrateChristmas(event.target.value);
    onAnswer(event.target.value); // Pass the answer to the parent component
  };

  return (
    <div>
      <h2>Do you celebrate Christmas?</h2>
      <div>
        <label>
          <input
            type="radio"
            value="Yes"
            checked={celebrateChristmas === 'Yes'}
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
            checked={celebrateChristmas === 'No'}
            onChange={handleRadioChange}
          />
          No
        </label>
      </div>
    </div>
  );
}

export default QuestionCelebrate;



