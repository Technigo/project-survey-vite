//Age, dropdown, choose your age span 
import React, { useState } from 'react';

function AgeQuestion() {
  // Create a state variable to store the selected age span
  const [selectedAge, setSelectedAge] = useState('');

  // Define an array of age spans as options for the dropdown
  const ageSpans = [
    'Under 18',
    '18 - 24',
    '25 - 34',
    '35 - 44',
    '45 - 54',
    '55 - 64',
    '65 or over',
  ];

  // Handle changes when a user selects an age span
  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  };

  return (
    <div>
      <h2>Age</h2>
      <label htmlFor="ageSelect">Choose your age span:</label>
      <select
        id="ageSelect"
        name="ageSelect"
        value={selectedAge}
        onChange={handleAgeChange}
      >
        <option value="">Select an age span</option>
        {ageSpans.map((ageSpan) => (
          <option key={ageSpan} value={ageSpan}>
            {ageSpan}
          </option>
        ))}
      </select>
      <p>You selected: {selectedAge}</p>
    </div>
  );
}

export default AgeQuestion;