import { useState } from "react"

export const Budget = () => {
  const [budget, setBudget] = useState("")
  return (
    <div className="questions">
      <p className="counter">4.</p>

      <label htmlFor="budget" className="labelQ">
        What is your budget?<br></br>
        <input
          type="range"
          id="budget"
          name="budget"
          min="100"
          max="10000"
          step="100"
          onChange={(event) => setBudget(event.target.value)}
          value={budget}
        />
        <span> {budget} €</span>
      </label>
    </div>
  )
}
