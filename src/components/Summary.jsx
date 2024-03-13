import PropTypes from "prop-types"

export const Summary = ({ name, destinationType, period, budget }) => {
  console.log("summary dest type:", destinationType)

  return (
    <div className="summary-container">
      <div className="labelQ">
        <p className="summary-message">Summary of your surprise holiday 🗺</p>
        <p>
          You want to book a surprise holiday for {name}. The type of
          destination you have selected is: {destinationType}. The selected
          period of time to stay is: {period}. You can expect to pay around{" "}
          {budget} €.
        </p>
        <p className="summary-message">
          We will start searching for the perfect trip for you. Stay tuned!
        </p>
      </div>
    </div>
  )
}

Summary.propTypes = {
  name: PropTypes.string.isRequired,
  destinationType: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
}
