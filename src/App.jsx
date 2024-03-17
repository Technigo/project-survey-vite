import { useState } from 'react';
import { StartPage } from './components/StartPage';
import { SurveyForm } from "./components/SurveyForm";
import { ResultPage } from './components/ResultPage';
import "./index.css";

export const App = () => {
  const [surveyStarted, setSurveyStarted] = useState(false);
  const [showResultPage, setShowResultPage] = useState(false);
  const [formData, setFormData] = useState({});

  const startSurvey = () => {
    setSurveyStarted(true);
  };

  const shouldShowResult =()=>{
    setShowResultPage(true);  
  }

  return (
    <div>
      {surveyStarted === false && <StartPage onStartSurvey={startSurvey} />}
      {surveyStarted && !showResultPage && <SurveyForm setFormData={setFormData} showResult={shouldShowResult} />}
      {showResultPage&& <ResultPage formData={formData}/>}
    </div>
  );
};
