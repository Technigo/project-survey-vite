import React, { useState } from 'react';

function QuestionCelebrate({ onAnswer }) {
  const [celebrateChristmas, setCelebrateChristmas] = useState('');

  const handleRadioChange = (event) => {
    const selectedOption = event.target.value;
    setCelebrateChristmas(selectedOption);
    onAnswer(selectedOption); // Pass the answer to the parent component
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
      {/* Conditional message for non-celebrators */}
      {celebrateChristmas === 'No' && (
        <p>This survey is not for you. Thank you for your time and have a lovely holiday!</p>
      )}
    </div>
  );
}

export default QuestionCelebrate;




