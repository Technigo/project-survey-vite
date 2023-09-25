//For example, name your gender Woman, Man, Other, elf, dropdownmenu
import React, { useState } from 'react';

function GenderQuestion() {
  const [selectedGender, setSelectedGender] = useState('Woman');

  const genderOptions = ['Woman', 'Man', 'Other', 'Elf'];

  return (
    <div>
      <h2>Select your gender:</h2>
      <select
        value={selectedGender}
        onChange={(e) => setSelectedGender(e.target.value)}
      >
        {genderOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>You selected: {selectedGender}</p>
    </div>
  );
}

export default GenderQuestion;