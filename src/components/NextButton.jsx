import PropTypes from "prop-types";

const NextButton = ({ qNum, validated }) => {
  return (
    <div className="next-q-btn">
      <button
        className={validated ? "validated" : null}
        aria-label={qNum === 4 ? "Submit your answer" : "Go to next question"}
        type="submit"
      >
        {qNum === 4 ? "Submit your answer" : "Next question"}
      </button>
    </div>
  );
};

NextButton.propTypes = {
  qNum: PropTypes.number.isRequired,
  validated: PropTypes.bool.isRequired,
};

export default NextButton;
