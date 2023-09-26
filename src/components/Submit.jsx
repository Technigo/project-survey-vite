import React, { useState } from 'react';
import SurveySummary from './SurveySummary';
import QuestionCelebrate from './QuestionCelebrate';
import QuestionGender from './QuestionGender';
import QuestionAge from './QuestionAge';
import QuestionLikeMost from './QuestionLikeMost';
import QuestionGift from './QuestionGift';
import QuestionExcited from './QuestionExcited';

function Submit() {
  const [answers, setAnswers] = useState({
    celebrateChristmas: '',
    excitementLevel: '',
    selectedGender: '',
    selectedAge: '',
    option: '',
    likedOption: '',
  });
  const [currentQuestion, setCurrentQuestion] = useState(''); // Initialize with the first question
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));

    const currentQuestionIndex = questionOrder.indexOf(question);

    if (currentQuestionIndex === questionOrder.length - 1) {
      setSubmitted(true);
    } else {
      setCurrentQuestion(questionOrder[currentQuestionIndex + 1]);
    }
  };

  const questionOrder = [
    'celebrateChristmas',
    'excitementLevel',
    'selectedGender',
    'selectedAge',
    'option',
    'likedOption',
    'summary',
  ];

  const handleSubmit = () => {
    // Submit the survey
    setSubmitted(true);

    // Debugging: Check the values
    console.log('celebrateChristmas:', answers.celebrateChristmas);
    console.log('excitementLevel:', answers.excitementLevel);
    console.log('selectedGender:', answers.selectedGender);
    console.log('selectedAge:', answers.selectedAge);
    console.log('option:', answers.option);
    console.log('likedOption:', answers.likedOption);
  };

  return (
    <div>
      {submitted ? (
        <SurveySummary surveyAnswers={answers} />
      ) : (
        <>
          {/* Render questions based on the current question state */}
          {currentQuestion === 'celebrateChristmas' && (
            <QuestionCelebrate
              onAnswer={(answer) => handleAnswer('celebrateChristmas', answer)}
              celebrateChristmas={answers.celebrateChristmas} // Pass the value down as a prop
            />
          )}
          {currentQuestion === 'excitementLevel' && (
            <QuestionExcited onAnswer={(answer) => handleAnswer('excitementLevel', answer)} />
          )}
          {currentQuestion === 'selectedGender' && (
            <QuestionGender onAnswer={(answer) => handleAnswer('selectedGender', answer)} />
          )}
          {currentQuestion === 'selectedAge' && (
            <QuestionAge onAnswer={(answer) => handleAnswer('selectedAge', answer)} />
          )}
          {currentQuestion === 'option' && (
            <QuestionLikeMost onAnswer={(answer) => handleAnswer('option', answer)} />
          )}
          {currentQuestion === 'likedOption' && (
            <QuestionGift onAnswer={(answer) => handleAnswer('likedOption', answer)} />
          )}

          {/* Render the submit button */}
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
}

export default Submit;






  


















