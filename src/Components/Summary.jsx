import "./Summary.css";
import PropTypes from "prop-types";

const Summary = ({ formData }) => {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>
        Your favorite artist is <strong>{formData.question1}</strong>.
      </p>
      {formData.question2 === "yes" ? (
        <p>You listen to music every day.</p>
      ) : (
        <p>You do not listen to music every day.</p>
      )}
      <p>
        Your favorite music genre is <strong>{formData.question3}</strong>.
      </p>
    </div>
  );
};

Summary.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default Summary;
