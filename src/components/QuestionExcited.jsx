import React, { useState, useEffect } from 'react';

function QuestionExcited({ onAnswer, excitementLevel }) {
  const [selectedLevel, setSelectedLevel] = useState(excitementLevel);

  useEffect(() => {
    setSelectedLevel(excitementLevel);
  }, [excitementLevel]);

  const handleSliderChange = (event) => {
    const selectedLevel = event.target.value;
    setSelectedLevel(selectedLevel);
    onAnswer('excitementLevel', selectedLevel);
  };

  return (
    <div>
      <h2>Are you excited about Christmas?</h2>
      <p> How much on a scale from 1 to 100?</p>
      <input
        type="range"
        min="1"
        max="100"
        value={selectedLevel}
        onChange={handleSliderChange}
      />
      <p>Excitement Level: {selectedLevel}</p>
    </div>
  );
}

export default QuestionExcited;
