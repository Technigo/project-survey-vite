import React from 'react';
import SurveySummary from './SurveySummary';

function Submit({ submitted, surveyAnswers }) {
  return (
    <div>
      {submitted ? (
        <SurveySummary surveyAnswers={surveyAnswers} />
      ) : null}
    </div>
  );
}

export default Submit;






  


















