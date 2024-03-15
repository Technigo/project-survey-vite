import PropTypes from "prop-types"
import "./welcome.css"

export default function Welcome({ onClick }) {
  return (
    <div className="welcome">
      <h1 className="welcome-title">Welcome!</h1>
      <p>We would like to know a bit about your latest trip.</p>
      <button className="continue-button" onClick={onClick}>
        Continue
      </button>
    </div>
  )
}

Welcome.propTypes = {
  onClick: PropTypes.func.isRequired,
}
