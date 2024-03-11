import PropTypes from "prop-types";

function SurveySummary({ responses }) {
  return (
    <div>
      <h2>Survey Summary</h2>
      {/* Display responses*/}
    </div>
  );
}

SurveySummary.propTypes = {
  responses: PropTypes.shape({
    favoriteFood: PropTypes.string.isRequired,
    cuisinePreference: PropTypes.string.isRequired,
    foodReason: PropTypes.string.isRequired,
  }).isRequired,
};

export default SurveySummary;
