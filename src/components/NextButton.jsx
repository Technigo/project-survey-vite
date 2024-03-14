import PropTypes from "prop-types";

const NextButton = ({ qNum }) => {
  return (
    <div className="next-q-btn">
      <button
        aria-label={qNum === 4 ? "Submit your answer" : "go to next question"}
        type="submit"
      >
        {qNum === 4 ? "Submit your answer" : "Next question"}
      </button>
    </div>
  );
};

NextButton.propTypes = { qNum: PropTypes.number.isRequired };

export default NextButton;
