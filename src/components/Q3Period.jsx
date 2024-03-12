import { useState } from "react"

export const Period = () => {
  const [period, setPeriod] = useState("")
  return (
    <div className="radio-container">
      <label>
        <input
          type="radio"
          value="weekend"
          onChange={(event) => setPeriod(event.target.value)}
          checked={period === "weekend"}></input>
        Weekend
      </label>
      <label>
        <input
          type="radio"
          value="week"
          onChange={(event) => setPeriod(event.target.value)}
          checked={period === "week"}></input>
        Week
      </label>
      <label>
        <input
          type="radio"
          value="two-weeks"
          onChange={(event) => setPeriod(event.target.value)}
          checked={period === "two-weeks"}></input>
        Two weeks
      </label>
      <label>
        <input
          type="radio"
          value="month"
          onChange={(event) => setPeriod(event.target.value)}
          checked={period === "month"}></input>
        Month
      </label>
    </div>
  )
}
