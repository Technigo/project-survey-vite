import React, { useState } from 'react';

function QuestionExcited({ onAnswer }) {
  const [excitementLevel, setExcitementLevel] = useState(5);

  const handleSliderChange = (event) => {
    const selectedLevel = event.target.value;
    setExcitementLevel(selectedLevel);
    onAnswer('excitementLevel', selectedLevel); // Pass the answer to the parent component
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