import { useState } from 'react'
import { Result } from '../Result/Result'
import './form.css'
import { ProgressBar } from '../ProgressBar/ProgressBar'

const selectedCups = ['1 cup', '2 cups', '3 cups', '4 cups or more']
const selectedTimes = ['Morning', 'Mid-morning', 'Afternoon', 'Evening']
export const Form = () => {
  const [favouriteCoffee, setFavouriteCoffee] = useState('')
  const [selectedCup, setSelectedCups] = useState('')
  const [selectedReason, setSelectedReason] = useState('')
  const [selectedTime, setSelectedTime] = useState([])
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [section, setSection] = useState(1)

  const handleInputChange = (event) => {
    setFavouriteCoffee(event.target.value)
  }
  const handleRadioInput = (event) => {
    setSelectedCups(event.target.value)
  }

  const handleDropdownInput = (event) => {
    setSelectedReason(event.target.value)
  }

  const handleCheckboxInput = (event) => {
    const { value, checked } = event.target
    if (checked) {
      // if checked adds the value to the selectedTime array
      setSelectedTime((prevSelectedTime) => [...prevSelectedTime, value])
    } else {
      // if unchecked removes the value from the selectedTime array
      setSelectedTime((prevSelectedTime) =>
        prevSelectedTime.filter((time) => time !== value)
      )
    }
  }
  const handleNextSection = () => {
    setSection(section + 1)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    // on submit the useState update the state of formsubmitted on true
    setFormSubmitted(true)
  }
  const renderSection = () => {
    switch (section) {
      case 1:
        return (
          <div className="formWrapper">
            <label>
              <h1>
                1.<br></br> What type of coffee do you prefer?
              </h1>
              <input
                type="text"
                value={favouriteCoffee}
                onChange={handleInputChange}
                required
                placeholder="Write your answer here..."
              />
            </label>
            <button onClick={handleNextSection}>Continue</button>
          </div>
        )
      case 2:
        return (
          <div>
            <h1>
              2.<br></br> How many cups of coffee do you typically drink per
              day?
            </h1>
            {selectedCups.map((cups) => (
              <label className="radiobuttonContainer" key={cups}>
                <input
                  id="radioCheckbox"
                  type="radio"
                  value={cups}
                  onChange={handleRadioInput}
                  checked={selectedCup === cups}
                  required
                />
                <div className="customRadioCheckbox">{cups}</div>
              </label>
            ))}
            <button onClick={handleNextSection}>Continue</button>
          </div>
        )
      case 3:
        return (
          <div className="formWrapper">
            <label>
              <h1>
                3.<br></br> What motivates you to drink coffee?
              </h1>
              <select
                onChange={handleDropdownInput}
                value={selectedReason}
                required
              >
                <option value="">Select a reason:</option>
                <option value="Energy boost">Energy boost</option>
                <option value="Taste preference">Taste preference</option>
                <option value="Socialization">Socialization</option>
                <option value="Ritual/habit">Ritual/habit</option>
                <option value="Warmth/comfort">Warmth/comfort</option>
              </select>
            </label>
            <button onClick={handleNextSection}>Continue</button>
          </div>
        )
      case 4:
        return (
          <div>
            <h1>
              4. <br></br>When do you usually drink coffee?
            </h1>
            {selectedTimes.map((time) => (
              <label key={time}>
                <input
                  id="radioCheckbox"
                  type="checkbox"
                  value={time}
                  onChange={handleCheckboxInput}
                  checked={selectedTime.includes(time)}
                />
                <div className="customRadioCheckbox">{time}</div>
              </label>
            ))}
            <button onClick={handleSubmit}>Submit your answer</button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div>
      {!formSubmitted ? ( // Render the form if formSubmitted is false
        <form onSubmit={handleSubmit}>{renderSection()}</form>
      ) : (
        <Result // Render the Result component if formSubmitted is true
          coffee={favouriteCoffee}
          cups={selectedCup}
          reason={selectedReason}
          time={selectedTime}
        />
      )}
    </div>
  )
}
