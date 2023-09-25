import React, { useState } from 'react';
import QuestionCelebrate from './QuestionCelebrate';
import QuestionGender from './QuestionGender';
import QuestionAge from './QuestionAge';
import QuestionLikeMost from './QuestionLikeMost';
import QuestionGift from './QuestionGift';

function Submit() {
  const [answers, setAnswers] = useState({});
  const [celebrateChristmas, setCelebrateChristmas] = useState(''); // Track if the user celebrates Christmas
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleChristmasSelection = (value) => {
    setCelebrateChristmas(value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <SurveySummary surveyAnswers={answers} />
      ) : (
        <>
          {celebrateChristmas === '' ? (
            <QuestionCelebrate onAnswer={handleChristmasSelection} />
          ) : (
            <>
              <QuestionGender onAnswer={handleAnswer} />
              <QuestionAge onAnswer={handleAnswer} />
              <QuestionLikeMost onAnswer={handleAnswer} />
              <QuestionGift onAnswer={handleAnswer} />
              <button onClick={handleSubmit}>Submit</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Submit;
