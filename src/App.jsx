import React from 'react';
import SurveyInfo from './components/Surveyinfo';
import QuestionGender from './components/QuestionGender'; 
import QuestionAge from './components/QuestionAge';
import QuestionCelebrate from './components/QuestionCelebrate';
import QuestionLikeMost from './components/QuestionLikeMost'; 
import QuestionGift from './components/QuestionGift';
import Submit from './components/Submit'; 
import Footer from './components/footer';

export const App = () => {
  return <div>Find me in src/app.jsx!</div>;
};

function App() {
  return (
    <div className="App">
      <Header />
      <SurveyInfo />
      <QuestionGender />
      <QuestionAge />
      <QuestionCelebrate />
      <QuestionLikeMost />
      <QuestionGift />
      <Submit />
      <Footer />
    </div>
  );
}

export default App;
