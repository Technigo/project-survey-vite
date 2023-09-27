import React from 'react';

function GenderQuestion({ selectedGender, onGenderChange }) {
  const genderOptions = ['Woman', 'Man', 'Other', 'Elf'];

  const handleGenderChange = (event) => {
    const selectedGenderOption = event.target.value;


    onGenderChange(selectedGenderOption);
  };

  return (
    <div>
      <h2>Select your gender:</h2>
      <select
        value={selectedGender}
        onChange={handleGenderChange}
      >
        <option value="">Select your gender</option>
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


