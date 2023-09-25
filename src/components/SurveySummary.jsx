import React from 'react';

function SurveySummary({ surveyAnswers }) {
  return (
    <div>
      <h2>Survey Summary</h2>
      <ul>
        {Object.entries(surveyAnswers).map(([question, answer]) => (
          <li key={question}>
            <strong>{question}:</strong> {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SurveySummary;
