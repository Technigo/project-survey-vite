import React from "react";

const ProgressBar = ({ progress, total }) => {
  return (
    <div role="progressbar" className="progressbar-container">
      <div
        className="progressbar-progress"
        style={{ width: `${(progress / total) * 100}%` }}
      />
    </div>
  );
};

export default ProgressBar;
