import React from 'react';
import Header from './components/header';
import SurveyInfo from './components/Surveyinfo';
import QuestionGender from './components/QuestionGender'; 
import QuestionAge from './components/QuestionAge';
import QuestionCelebrate from './components/QuestionCelebrate';
import QuestionLikeMost from './components/QuestionLikeMost'; 
import QuestionGift from './components/QuestionGift';
import Submit from './components/Submit'; 
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SurveyInfo />
      <QuestionCelebrate />
      <QuestionGender />
      <QuestionAge />
      <QuestionLikeMost />
      <QuestionGift />
      <Submit />
      <Footer />
    </div>
  );
}

export default App;
