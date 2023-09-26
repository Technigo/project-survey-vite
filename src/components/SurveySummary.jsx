import React from 'react';

function SurveySummary({ surveyAnswers }) {
    const { celebrateChristmas, selectedGender, selectedAge, option, likedOption } = surveyAnswers;
  
    return (
      <div>
        <h2>Here's a quick review of your answers</h2>
        <p>You {celebrateChristmas}, you are a {selectedGender} who is between the ages {selectedAge}.</p>
        <p>You like {option} about Christmas and {likedOption} about Christmas gifts.</p>
      </div>
    );
  }
  
  export default SurveySummary;
  




