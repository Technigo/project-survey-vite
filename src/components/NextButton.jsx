import PropTypes from "prop-types";

const NextButton = ({ onClick }) => {
  return (
    <div className="next-q-btn">
      <button onClick={onClick} type="submit">
        Next question
      </button>
    </div>
  );
};

NextButton.propTypes = { onClick: PropTypes.func.isRequired };

export default NextButton;
