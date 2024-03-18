import { useEffect, useState } from "react"
import PropTypes from "prop-types"

// Component for the Budget Question

export const Budget = ({ onInputChange }) => {
  const [budget, setBudget] = useState(5000)

  //useEffect to call onInputChange to ensure parent receives the
  //default value in case user doesn't interact with the range slider
  useEffect(() => {
    onInputChange("budget", budget)
  }, [budget])

  const handleChange = (event) => {
    event.preventDefault()
    const newBudget = parseInt(event.target.value, 10)

    setBudget(newBudget)
    onInputChange("budget", newBudget)
  }

  return (
    <div className="questions">
      <p className="counter">4.</p>

      <label htmlFor="budget" className="labelQ">
        What is your budget?
        <input
          type="range"
          id="budget"
          className="budget-range"
          name="budget"
          min="100"
          max="10000"
          step="100"
          onChange={handleChange}
          value={budget}
        />
        <span> {budget} €</span>
      </label>
    </div>
  )
}

Budget.propTypes = {
  onInputChange: PropTypes.func.isRequired,
}
