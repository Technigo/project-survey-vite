import React, { useState, useEffect } from "react";

function QuestionExcited({ onAnswer, excitementLevel }) {
  const [selectedLevel, setSelectedLevel] = useState(excitementLevel);
  const [isInteracted, setIsInteracted] = useState(false);

  useEffect(() => {
    setSelectedLevel(excitementLevel);
  }, [excitementLevel]);

  const handleSliderChange = (event) => {
    const selectedLevel = event.target.value;
    setSelectedLevel(selectedLevel);
    onAnswer(selectedLevel);
    setIsInteracted(true);
  };

  return (
    <div>
      <h2>Are you excited about Christmas?</h2>
      <p>How much on a scale from 1 to 100? Slide the bar to display your excitementlevel🎄⭐🎄 </p>
      <input
        type="range"
        min="1"
        max="100"
        value={selectedLevel}
        onChange={handleSliderChange}
      />
      {isInteracted && <p>Excitement Level: {selectedLevel}</p>}
    </div>
  );
}

export default QuestionExcited;
