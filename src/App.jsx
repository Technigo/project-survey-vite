import { useState } from "react";
import SurveyForm from "./SurveyForm";
import SurveySummary from "./SurveySummary";
import PropTypes from "prop-types";

function App() {
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [responses, setResponses] = useState({
    favoriteFood: "",
    cuisinePreference: "",
    foodReason: "",
  });

  const handleSubmit = (answers) => {
    setResponses(answers);
    setSurveySubmitted(true);
  };

  return (
    <div>
      {!surveySubmitted ? (
        <SurveyForm onSubmit={handleSubmit} />
      ) : (
        <SurveySummary responses={responses} />
      )}
    </div>
  );
}

SurveySummary.propTypes = {
  responses: PropTypes.shape({
    favoriteFood: PropTypes.string,
    cuisinePreference: PropTypes.string,
    foodReason: PropTypes.string,
  }).isRequired,
};

export default App;
