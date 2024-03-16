import PropTypes from "prop-types";

export const SummaryPage = ({ summary }) => {
  return (
    <div className="summary-page">
      <h1>Form summary</h1>
      <h2>Submit successfully</h2>
      <div className="summary-text">
        <p>
          {summary[0]},<br></br>
          {summary[1]}
        </p>
        <p>
          We will send you the updates to your email. Please check your inbox
          and verify your email.
        </p>
        <p>Stay tuned!</p>
      </div>
    </div>
  );
};

SummaryPage.propTypes = {
  summary: PropTypes.array.isRequired,
};
