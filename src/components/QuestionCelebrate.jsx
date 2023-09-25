
import React, { useState } from 'react';

function Survey() {
  // Define a state variable to track the user's response
  const [celebrateChristmas, setCelebrateChristmas] = useState('');

  // Handle changes when the user selects a radio button
  const handleRadioChange = (event) => {
    setCelebrateChristmas(event.target.value);
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
      {celebrateChristmas === 'No' && (
        <p>Thank you, but you're not right for this survey.</p>
      )}
    </div>
  );
}

export default Survey;