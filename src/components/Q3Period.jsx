import { useState } from "react"

export const Period = () => {
  const [period, setPeriod] = useState("")
  return (
    <div className="questions">
      <p className="counter">3.</p>
      <p className="labelQ">How long do you want to stay?</p>
      <label htmlFor="weekend" className="radio-button">
        <input
          id="weekend"
          type="radio"
          value="weekend"
          onChange={(event) => setPeriod(event.target.value)}
          checked={period === "weekend"}></input>
        Weekend
      </label>
      <label htmlFor="week" className="radio-button">
        <input
          id="week"
          type="radio"
          value="week"
          onChange={(event) => setPeriod(event.target.value)}
          checked={period === "week"}></input>
        Week
      </label>
      <label htmlFor="two-weeks" className="radio-button">
        <input
          id="two-weeks"
          type="radio"
          value="two-weeks"
          onChange={(event) => setPeriod(event.target.value)}
          checked={period === "two-weeks"}></input>
        Two weeks
      </label>
      <label htmlFor="month" className="radio-button">
        <input
          id="month"
          type="radio"
          value="month"
          onChange={(event) => setPeriod(event.target.value)}
          checked={period === "month"}></input>
        Month
      </label>
    </div>
  )
}
