import React, { useState } from 'react';
import SurveySummary from './SurveySummary';
import QuestionCelebrate from './QuestionCelebrate';
import QuestionGender from './QuestionGender';
import QuestionAge from './QuestionAge';
import QuestionLikeMost from './QuestionLikeMost';
import QuestionGift from './QuestionGift';

function Submit() {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(''); // Start with 'celebrate' question
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });

    // Transition to the next question or to the summary
    switch (question) {
      case 'celebrate':
        setCurrentQuestion('gender');
        break;
      case 'gender':
        setCurrentQuestion('age');
        break;
      case 'age':
        setCurrentQuestion('likeMost');
        break;
      case 'likeMost':
        setCurrentQuestion('gift');
        break;
      case 'gift':
        setCurrentQuestion('summary');
        break;
      default:
        setCurrentQuestion('summary');
    }
  };

  const handleSubmit = () => {
    // Submit the survey
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <SurveySummary surveyAnswers={answers} />
      ) : (
        <>
          {/* Render questions based on the current question state */}
          {currentQuestion === 'celebrate' && (
            <QuestionCelebrate onAnswer={(answer) => handleAnswer('celebrate', answer)} />
          )}
          {currentQuestion === 'gender' && (
            <QuestionGender onAnswer={(answer) => handleAnswer('gender', answer)} />
          )}
          {currentQuestion === 'age' && (
            <QuestionAge onAnswer={(answer) => handleAnswer('age', answer)} />
          )}
          {currentQuestion === 'likeMost' && (
            <QuestionLikeMost onAnswer={(answer) => handleAnswer('likeMost', answer)} />
          )}
          {currentQuestion === 'gift' && (
            <QuestionGift onAnswer={(answer) => handleAnswer('gift', answer)} />
          )}

          {/* Render the submit button */}
          {currentQuestion !== 'summary' && (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </>
      )}
    </div>
  );
}

export default Submit;

  


















