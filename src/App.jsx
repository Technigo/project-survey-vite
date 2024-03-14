import { useState } from 'react';
import { StartPage } from './components/StartPage';
import { SurveyForm } from "./components/SurveyForm";
import "./index.css";
import { ResultPage } from './components/ResultPage';

export const App = () => {
  const [surveyStarted, setSurveyStarted] = useState(false);
  const [showResultPage, setShowResultPage] = useState(false);

  const startSurvey = () => {
    setSurveyStarted(true);
  };

  const handleFormSubmit =(formData)=>{
    setShowResultPage(true);  
  }

  return (
    <div>
      {surveyStarted === false && <StartPage onStartSurvey={startSurvey} />}
      {surveyStarted && !showResultPage && <SurveyForm onSubmit={handleFormSubmit} />}
      {showResultPage&& <ResultPage/>}

    </div>
  );
};
