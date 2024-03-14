import PropTypes from "prop-types";

export const Result = ({
  displayLevel,
  displayChoices,
  displayLocation,
  displayCompany,
}) => {
  return (
    <div className="result-container">
      <h2>You are super picky when it comes to pizza.</h2>

      <p className="result">Your level: {displayLevel}</p>
      <p className="result">Your score: {displayChoices}</p>
      <p className="result">Your Location: {displayLocation}</p>
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