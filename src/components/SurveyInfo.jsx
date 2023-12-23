import React from "react";

function SurveyInfo({ showInfo }) {
  return (
    <div className="survey-info">
      {showInfo && (
        <p>
          Welcome to The Great Christmas Survey!
          <br></br>Please tell us more about your thoughts on this most Magical
          Holiday of all!
        </p>
      )}
    </div>
  );
}

export default SurveyInfo;