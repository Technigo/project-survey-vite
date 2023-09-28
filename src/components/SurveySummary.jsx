import React from 'react';

function SurveySummary({ surveyAnswers }) {
  const {
    celebrateChristmas,
    excitementLevel,
    selectedGender,
    selectedAge,
    option,
    likedOption,
  } = surveyAnswers;

  return (
    <div>
      <h2>Here's a quick review of your answers</h2>
      <p>You {celebrateChristmas}. You are a {selectedGender} who is between the ages {selectedAge}.</p>
      <p>You are excited about Christmas at a level of {excitementLevel} out of 100.</p>
      <p>You like {Array.isArray(option) ? option.join(', ') : 'No options selected'} about Christmas and {likedOption} about Christmas gifts.</p>
    </div>
  );
}

export default SurveySummary;




  




