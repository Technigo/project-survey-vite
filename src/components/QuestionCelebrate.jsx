import React, { useState } from 'react';

function QuestionCelebrate() {
  const [celebrateChristmas, setCelebrateChristmas] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [surveyAnswers, setSurveyAnswers] = useState([]);

  const handleRadioChange = (event) => {
    setCelebrateChristmas(event.target.value);
  };

  return (
    <div>
      {submitted ? (
        <SurveySummary surveyAnswers={surveyAnswers} />
      ) : (
        <>
          <h2>Do you celebrate Christmas?</h2>
          <div>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={celebrateChristmas === 'Yes'}
                onChange={handleRadioChange}
              />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="No"
                checked={celebrateChristmas === 'No'}
                onChange={handleRadioChange}
              />
              No
            </label>
          </div>
        </>
      )}
    </div>
  );
}

export default QuestionCelebrate;