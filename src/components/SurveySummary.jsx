import React from 'react';

function SurveySummary({ surveyAnswers }) {
  const { celebrate, gender, age, likeMost, gift } = surveyAnswers;

  return (
    <div>
      <h2>Survey Summary</h2>
      <p>You {celebrate}, you are a {gender} who is between the ages {age}.</p>
      <p>You like {likeMost} about Christmas and {gift} about Christmas gifts.</p>
    </div>
  );
}

export default SurveySummary;




