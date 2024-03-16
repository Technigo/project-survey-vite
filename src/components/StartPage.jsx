import PropTypes from "prop-types";

export const StartPage = ({ onClick }) => {
  return (
    <div className="starting-page">
      <h1>How to cope with stress</h1>
      <h2>Find your inner peace </h2>
      <button className="start-button" onClick={onClick}>
        Let&apos;s go
      </button>
    </div>
  );
};

StartPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};
