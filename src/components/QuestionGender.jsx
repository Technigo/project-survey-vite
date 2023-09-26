//For example, name your gender Woman, Man, Other, elf, dropdownmenu
// GenderQuestion.jsx
import React, { useState } from 'react';

function GenderQuestion() {
  const [selectedGender, setSelectedGender] = useState(''); 

  const genderOptions = ['Woman', 'Man', 'Other', 'Elf'];

  return (
    <div>
      <h2>Select your gender:</h2>
      <select
        value={selectedGender}
        onChange={(e) => setSelectedGender(e.target.value)}
      >
        <option value="">Select your gender</option> {/* Add an empty option */}
        {genderOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>You selected: {selectedGender || 'No gender selected'}</p>
    </div>
  );
}

export default GenderQuestion;
