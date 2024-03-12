const Header = ({ question }) => {
  return (
    <div className="header">
      <p className="question-number">{question.id}.</p>
      <p className="question-text">{question.title}</p>
    </div>
  );
};

export default Header;
