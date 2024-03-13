import { useState } from "react"

export const Name = () => {
  const [name, setName] = useState("")
  return (
    <div className="questions">
      <p className="counter">1.</p>
      <label htmlFor="name" className="labelQ">
        What is your name?<br></br>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
          id="name"
          placeholder="Write your name here..."
          className="name-input"
        />
      </label>
    </div>
  )
}
