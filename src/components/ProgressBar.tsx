import React from "react";

const ProgressBar = ({ qNum }) => {
  return (
    <div role="progressbar" className="progressbar-container">
      <div
        className="progressbar-progress"
        style={{ width: `${(qNum / 5) * 100}%` }}
      />
      {qNum < 5 && <span className="question-answered">{qNum}</span>}
      <span className="question-total">5</span>
    </div>
  );
};

export default ProgressBar;
