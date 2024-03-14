import { useState } from "react";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";

export const Period = ({ onInputChange }) => {
  const [period, setPeriod] = useState("");
  const { control, errors } = useForm();

  const handleChange = (event) => {
    const newPeriod = event.target.value;
    console.log("Q3 period:", newPeriod);

    setPeriod(newPeriod);
    onInputChange("period", newPeriod);
  };

  return (
    <div className="questions">
      <p className="counter">3.</p>
      <p className="labelQ">How long do you want to stay?</p>
      <div className="radio-container">
        <Controller
          name="period"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <>
              <label htmlFor="weekend" className="radio-button">
                <input
                  name="period-length"
                  id="weekend"
                  type="radio"
                  value="weekend"
                  onChange={handleChange}
                  checked={period === "weekend"}
                  required
                  {...field}
                ></input>
                Weekend
              </label>
              <label htmlFor="week" className="radio-button">
                <input
                  name="period-length"
                  id="week"
                  type="radio"
                  value="week"
                  onChange={handleChange}
                  checked={period === "week"}
                  {...field}
                ></input>
                Week
              </label>
              <label htmlFor="two-weeks" className="radio-button">
                <input
                  name="period-length"
                  id="two-weeks"
                  type="radio"
                  value="two-weeks"
                  onChange={handleChange}
                  checked={period === "two-weeks"}
                  {...field}
                ></input>
                Two weeks
              </label>
              <label htmlFor="month" className="radio-button">
                <input
                  name="period-length"
                  id="month"
                  type="radio"
                  value="month"
                  onChange={handleChange}
                  checked={period === "month"}
                  {...field}
                ></input>
                Month
              </label>
            </>
          )}
        />
        {errors.period && (
          <p className="error-message">{errors.period.message}</p>
        )}
      </div>
    </div>
  );
};

Period.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
