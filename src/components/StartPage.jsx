import "react";
import "./StartPage.css";

import PropTypes from "prop-types";

export const StartPage = ({ onStartSurvey }) => {
  return (
    <div className="start-page">
        <p>Music Survey</p>
      <button onClick={onStartSurvey}>Start</button>
    </div>
  );
};

StartPage.propTypes = {
  onStartSurvey: PropTypes.func.isRequired,
};
