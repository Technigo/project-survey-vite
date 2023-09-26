import React, { useState } from 'react';

function QuestionExcited({ onAnswer }) {
  const [excitementLevel, setExcitementLevel] = useState(5); // Initialize with a default value

  const handleSliderChange = (event) => {
    const selectedLevel = parseInt(event.target.value);
    setExcitementLevel(selectedLevel);
    onAnswer('excited', selectedLevel); // Pass the answer to the parent component with the question name
  };

  return (
    <div>
      <h2>Are you excited about Christmas?</h2>
      <p> How much on a scale from 1 to 100?</p>
      <input
        type="range"
        min="1"
        max="100"
        value={excitementLevel}
        onChange={handleSliderChange}
      />
      <p>Excitement Level: {excitementLevel}</p>
    </div>
  );
}

export default QuestionExcited;