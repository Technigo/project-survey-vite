import PropTypes from "prop-types";
import { resultTexts } from "./survey-components/resulttexts";
import { levelTexts } from "./survey-components/levelTexts";

const resultTitle = (choicesScore) => {
  let title = "Unkown";
  {
    resultTexts.map(({ text, score }) => {
      if (score <= choicesScore.displayChoices) {
        title = text;
      }
    });
    return title;
  }
};

const levelCheck = (displayLevel) => {
  let levelText = "Unkown";
  console.log(displayLevel.displayLevel);
  console.log(levelText);
  {
    levelTexts.map(({ text, level }) => {
      console.log(text)
      if (level === displayLevel.displayLevel) {
        levelText = text;
      }
    });
  }
    console.log(levelText);
  return levelText;
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
      <p className="result">{levelCheck({ displayLevel })}</p>

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
