import PropTypes from "prop-types";
const Header = ({ question }) => {
  return (
    <div className="header">
      <p className="question-number">{question?.id}.</p>
      <p className="question-text">{question?.title}</p>
    </div>
  );
};

Header.propTypes = { question: PropTypes.object };
export default Header;
