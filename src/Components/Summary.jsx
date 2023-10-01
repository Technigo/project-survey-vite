
import PropTypes from "prop-types";

export const Summary = ({name, email, livingArea, fav, freq, goal, onChangeSummary}) => {
  return (    
    <div className="summary" onChange={onChangeSummary}>
      <h2>Thank you for filling out our survey!</h2>
      <h3>Here is a summary of your answers:</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>You live in the {livingArea}</p>
      <p>You enjoy {(fav.map((exercise) => exercise.trim().toLowerCase()).join(", "))}</p>
      <p>You engage in physical activities {freq.trim().toLowerCase()}</p>
      <p>Your fitness goal is {goal.trim().toLowerCase()}</p>
    </div>
  )
}

Summary.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  livingArea: PropTypes.string,
  fav: PropTypes.array,
  freq: PropTypes.string,
  goal: PropTypes.string,
  onChangeSummary: PropTypes.func
}