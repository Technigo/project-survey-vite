// import { useState } from "react";
import PropTypes from "prop-types";

export const Submit = ({ showResults, setShowResults }) => {
  //   const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(!showResults);
  };

  return (
    <div className="submit">
      <input type="submit" value={showResults ? "Reset" : "Submit"} onClick={handleSubmit} accessKey="s" />
    </div>
  );
};

Submit.propTypes = {
  showResults: PropTypes.bool,
  setShowResults: PropTypes.func,
};
