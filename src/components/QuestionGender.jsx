import React from 'react';

function QuestionGender({ selectedGender, onGenderChange }) {
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
      
      {/* Conditionally display the selected gender if it's not empty */}
      {selectedGender && <p>You selected: {selectedGender}</p>}
    </div>
  );
}

export default QuestionGender;


