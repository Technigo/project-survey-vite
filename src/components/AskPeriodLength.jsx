import { useState } from "react"
import PropTypes from "prop-types"

export const Period = ({ onInputChange }) => {
  const [period, setPeriod] = useState("")

  const handleChange = (event) => {
    const newPeriod = event.target.value
    console.log("Q3 period:", newPeriod)

    setPeriod(newPeriod)
    onInputChange("period", newPeriod)
  }

  return (
    <div className="questions">
      <p className="counter">3.</p>
      <p className="labelQ">How long do you want to stay?</p>
      <div className="radio-container">
        <label htmlFor="weekend" className="radio-button">
          <input
            id="weekend"
            type="radio"
            value="weekend"
            onChange={handleChange}
            checked={period === "weekend"}></input>
          Weekend
        </label>
        <label htmlFor="week" className="radio-button">
          <input
            id="week"
            type="radio"
            value="week"
            onChange={handleChange}
            checked={period === "week"}></input>
          Week
        </label>
        <label htmlFor="two-weeks" className="radio-button">
          <input
            id="two-weeks"
            type="radio"
            value="two-weeks"
            onChange={handleChange}
            checked={period === "two-weeks"}></input>
          Two weeks
        </label>
        <label htmlFor="month" className="radio-button">
          <input
            id="month"
            type="radio"
            value="month"
            onChange={handleChange}
            checked={period === "month"}></input>
          Month
        </label>
      </div>
    </div>
  )
}

Period.propTypes = {
  onInputChange: PropTypes.func.isRequired,
}
