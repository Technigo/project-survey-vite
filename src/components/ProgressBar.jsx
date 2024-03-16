import PropTypes from "prop-types";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-section">
      <div role="progressbar" className="progressbar-container">
        <div
          className="progressbar-progress"
          style={{ width: `${(progress / 5) * 100}%` }}
        ></div>
        {progress < 5 && <span className="question-answered">{progress}</span>}
      </div>
      <div className="question-total">
        <span>5</span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
