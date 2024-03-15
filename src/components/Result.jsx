import PropTypes from "prop-types";
import { resultTexts } from "./survey-components/resulttexts";

// const [text, setText] = useState("Unknown")
const resultTitle = (choicesScore) => {
  let title = "Unkown";
  {
    resultTexts.map(({ text, score }) => {
      console.log(choicesScore.displayChoices);
      console.log(score);
      console.log(text);
      if (score <= choicesScore.displayChoices) {
        title = text;
      }
    });
    return title;
  }
};

export const Result = ({
  displayLevel,
  displayChoices,
  displayLocation,
  displayCompany,
}) => {
  
  return (
    <div className="result-container">
      <h2>{resultTitle({ displayChoices })}</h2>

      <p className="result">Your level: {displayLevel}</p>
      <p className="result">Your score: {displayChoices}</p>
      <p className="result">Your location: {displayLocation}</p>
      <p className="result">Your company: {displayCompany}</p>
    </div>
  );
};

Result.propTypes = {
  displayLevel: PropTypes.string,
  displayChoices: PropTypes.number,
  displayLocation: PropTypes.string,
  displayCompany: PropTypes.string,
};
