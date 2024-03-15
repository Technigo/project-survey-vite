import PropTypes from "prop-types";

export const Submit = ({
  showResults,
  setShowResults,
  displayLocation,
  displayCompany,
  displayLevel,
  setDisplayLevel,
  setDisplayChoices,
  setDisplayLocation,
  setDisplayCompany,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (displayLevel === undefined) {
      alert("Please enter your level");
    } else if (displayCompany === undefined) {
      alert("Please enter your company");
    } else if (displayLocation === undefined) {
      alert("Please enter your location");
    } else {
      setShowResults(!showResults);
    }
    if (showResults) {
      setDisplayLevel();
      setDisplayChoices(0);
      setDisplayLocation();
      setDisplayCompany();
    }
  };

  return (
    <div className="submit">
      <input
        type="submit"
        value={showResults ? "Reset" : "Submit"}
        onClick={handleSubmit}
        accessKey="s"
      />
    </div>
  );
};

Submit.propTypes = {
  showResults: PropTypes.bool,
  setShowResults: PropTypes.func,
  displayLevel: PropTypes.string,
  displayLocation: PropTypes.string,
  displayCompany: PropTypes.string,
  setDisplayLevel: PropTypes.func,
  setDisplayChoices: PropTypes.func,
  setDisplayLocation: PropTypes.func,
  setDisplayCompany: PropTypes.func,
};
