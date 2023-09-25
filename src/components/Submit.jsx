import React from 'react';

function SurveySummary({ surveyAnswers = [] }) {
  return (
    <div className="summary">
      <h2>Survey Summary</h2>
      <p>Answers you provided:</p>
      <ul>
        {surveyAnswers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
}

export default SurveySummary;