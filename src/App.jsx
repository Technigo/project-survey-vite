import { useState } from 'react';
import { StartPage } from './components/StartPage';
import { SurveyForm } from "./components/SurveyForm";
import "./index.css";

export const App = () => {
  const [surveyStarted, setSurveyStarted] = useState(false);

  const startSurvey = () => {
    setSurveyStarted(true);
  };

  return (
    <div>
      {!surveyStarted ? (
        <StartPage onStartSurvey={startSurvey} />
      ) : (
        <SurveyForm />
      )}
    </div>
  );
};
