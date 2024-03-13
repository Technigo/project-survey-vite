import PropTypes from "prop-types"

export const Summary = ({ name, destinationType, period, budget }) => {
  return (
    <div>
      <h3>Summary of your suprise holiday</h3>
      <p>Name: {name}</p>
      <p>Destination Type: {destinationType}</p>
      <p>Period: {period}</p>
      <p>Budget: {budget}</p>
    </div>
  )
}

Summary.propTypes = {
  name: PropTypes.string.isRequired,
  destinationType: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
}
