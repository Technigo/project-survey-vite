import { useState } from "react"
import PropTypes from "prop-types"
// Import for Validation of the Radio Buttons
import { useForm, Controller } from "react-hook-form"
import checkmarkIcon from "../assets/checkmark.svg"

// Component for the Duration of the Stay Question

export const Period = ({ onInputChange }) => {
  const [period, setPeriod] = useState("")
  const {
    control,
    formState: { errors },
  } = useForm()

  const handleChange = (event) => {
    const newPeriod = event.target.value

    setPeriod(newPeriod)
    onInputChange("period", newPeriod)
  }

  return (
    <div className="questions">
      <p className="counter">3.</p>
      <p className="labelQ">How long do you want to stay?</p>
      <div className="radio-container">
        <Controller
          name="period"
          control={control}
          rules={{ required: "Please select an option" }}
          render={() => (
            <>
              <label
                htmlFor="weekend"
                className="radio-button"
                style={{
                  backgroundColor:
                    period === "weekend" ? "#CCD1ED" : "transparent",
                }}>
                <input
                  name="period-length"
                  id="weekend"
                  type="radio"
                  value="weekend"
                  onChange={handleChange}
                  checked={period === "weekend"}
                  required></input>
                {period === "weekend" && (
                  <span className="checkmark-icon">
                    <img src={checkmarkIcon} alt="checkmark" />
                  </span>
                )}{" "}
                Weekend{" "}
              </label>
              <label
                htmlFor="week"
                className="radio-button"
                style={{
                  backgroundColor:
                    period === "week" ? "#CCD1ED" : "transparent",
                }}>
                <input
                  name="period-length"
                  id="week"
                  type="radio"
                  value="week"
                  onChange={handleChange}
                  checked={period === "week"}></input>
                {period === "week" && (
                  <span className="checkmark-icon">
                    <img src={checkmarkIcon} alt="checkmark" />
                  </span>
                )}{" "}
                Week{" "}
              </label>
              <label
                htmlFor="two-weeks"
                className="radio-button"
                style={{
                  backgroundColor:
                    period === "two-weeks" ? "#CCD1ED" : "transparent",
                }}>
                <input
                  name="period-length"
                  id="two-weeks"
                  type="radio"
                  value="two-weeks"
                  onChange={handleChange}
                  checked={period === "two-weeks"}></input>
                {period === "two-weeks" && (
                  <span className="checkmark-icon">
                    <img src={checkmarkIcon} alt="checkmark" />
                  </span>
                )}{" "}
                Two weeks{" "}
              </label>
              <label
                htmlFor="month"
                className="radio-button"
                style={{
                  backgroundColor:
                    period === "month" ? "#CCD1ED" : "transparent",
                }}>
                <input
                  name="period-length"
                  id="month"
                  type="radio"
                  value="month"
                  onChange={handleChange}
                  checked={period === "month"}></input>
                {period === "month" && (
                  <span className="checkmark-icon">
                    <img src={checkmarkIcon} alt="checkmark" />
                  </span>
                )}{" "}
                Month{" "}
              </label>
            </>
          )}
        />
        {errors.period && (
          <p className="error-message">{errors.period.message}</p>
        )}
      </div>
    </div>
  )
}

Period.propTypes = {
  onInputChange: PropTypes.func.isRequired,
}
