import { useState } from "react"
import PropTypes from "prop-types"

export const Name = ({ onInputChange }) => {
  const [name, setName] = useState("")

  const handleChange = (event) => {
    const newName = event.target.value
    setName(newName)
    onInputChange("name", newName)
  }

  return (
    <div className="questions">
      <p className="counter">1.</p>
      <label htmlFor="name" className="labelQ">
        What is your name?
        <input
          type="text"
          onChange={handleChange}
          value={name}
          id="name"
          placeholder="Write your name here..."
          className="name-input"
          required
        />
      </label>
    </div>
  )
}

Name.propTypes = {
  onInputChange: PropTypes.func.isRequired,
}
