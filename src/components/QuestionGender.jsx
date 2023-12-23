function QuestionGender({ selectedGender, onGenderChange }) {
  const genderOptions = ['Mrs Clause', 'Santa Clause', ' An elf', 'A reindeer', 'The Grinch', 'Other', ];

  const handleGenderChange = (event) => {
    const selectedGenderOption = event.target.value;
    onGenderChange(selectedGenderOption);
  };

  // Define a function to get the appropriate message based on the selected gender
  const getGenderMessage = (selectedGender) => {
    switch (selectedGender) {
      case 'Mrs Clause':
        return 'You selected Mrs. Clause - The one who runs the show!';
      case 'Santa Clause':
        return 'You selected Santa Clause - Ho ho ho!';
      case 'Elf':
        return 'You selected Elf - Do you know Buddy?';
      case 'Reindeer':
        return 'You selected Reindeer - Flying high!';
        case 'The Grinch':
          return 'You selected The Grinch- Keep it green!';
        case 'Other':
          return 'You selected Other - Magical!';
      default:
        return '';
    }
  };

  return (
    <div>
      <h2>I can see myself as?</h2>
      <select
        value={selectedGender}
        onChange={handleGenderChange}
      >
        <option value="">Make a selection?</option>
        {genderOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      
      {/* Conditionally display the selected gender if it's not empty */}
      {selectedGender && <p>{getGenderMessage(selectedGender)}</p>}
    </div>
  );
}

export default QuestionGender;


