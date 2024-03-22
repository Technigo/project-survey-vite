import "react";
import "./StartPage.css";
import startPageImage from "../assets/startpage.avif";

import PropTypes from "prop-types";

export const StartPage = ({ onStartSurvey }) => {
  return (
    <div className="start-page">
      <img src={startPageImage} alt="Music Survey Image" loading="lazy" />
      <div className="text-container">
        <h1>Music Survey</h1>
        <button onClick={onStartSurvey}>Let&apos;s start!</button>
      </div>
    </div>
  );
};

StartPage.propTypes = {
  onStartSurvey: PropTypes.func.isRequired,
};
