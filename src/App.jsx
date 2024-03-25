import SurveyForm from './components/SurveyForm';
import './App.css'; 

export const App = () => {
  return (
    <>
      <div className='header'>
        <h1>The Science of Happiness</h1>
        <h2>Everyday Joy Boosters survey</h2>
      </div>
      <div className="app-container">
        <SurveyForm />
      </div>
    </>
  );
};
