import React, { useState } from 'react';
import Header from './components/header';
import SurveyInfo from './components/SurveyInfo';
import QuestionExcited from './components/QuestionExcited';
import QuestionGender from './components/QuestionGender';
import QuestionAge from './components/QuestionAge';
import QuestionCelebrate from './components/QuestionCelebrate';
import QuestionLikeMost from './components/QuestionLikeMost';
import QuestionGift from './components/QuestionGift';
import SurveySummary from './components/SurveySummary';
import Footer from './components/footer';

function App() {
  const [answers, setAnswers] = useState({
    celebrateChristmas: '',
    excitementLevel: '',
    selectedGender: '',
    selectedAge: '',
    option: '',
    likedOption: '',
  });

  const [showSummary, setShowSummary] = useState(false);

  const handleAnswer = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleSubmit = () => {
    setShowSummary(true);
  };

  return (
    <div className="App">
      <Header />
      <SurveyInfo />
      
      {/* Render all questions */}
      <QuestionCelebrate
        onAnswer={(answer) => handleAnswer('celebrateChristmas', answer)}
        celebrateChristmas={answers.celebrateChristmas}
      />
      <QuestionExcited
        onAnswer={(answer) => handleAnswer('excitementLevel', answer)}
        excitementLevel={answers.excitementLevel}
      />
    <QuestionGender
    onGenderChange={(selectedGender) => handleAnswer('selectedGender', selectedGender)}
    selectedGender={answers.selectedGender}
    />
      <QuestionAge
        onAnswer={(answer) => handleAnswer('selectedAge', answer)}
        selectedAge={answers.selectedAge}
      />
      <QuestionLikeMost
        onAnswer={(answer) => handleAnswer('option', answer)}
        option={answers.option}
      />
      <QuestionGift
        onAnswer={(answer) => handleAnswer('likedOption', answer)}
        likedOption={answers.likedOption}
      />
      
      {/* Render the Submit button */}
      <button onClick={handleSubmit}>Submit</button>

      {/* Render the summary when showSummary is true */}
      {showSummary && <SurveySummary surveyAnswers={answers} />}
      
      <Footer />
    </div>
  );
}

export default App;


