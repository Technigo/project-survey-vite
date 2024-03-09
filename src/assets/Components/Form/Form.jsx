import React, { useState } from 'react'
const selectedCups = ['1 cup', '2 cups', '3 cups', '4 cups or more']
const selectedTimes = ['Morning', 'Mid-morning', 'Afternoon', 'Evening']
export const Form = () => {
  const [favouriteCoffee, setFavouriteCoffee] = useState('')
  const [selectedCup, setSelectedCups] = useState('1 cup')
  const [selectedReason, setSelectedReason] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const handleInputChange = (event) => {
    setFavouriteCoffee(event.target.value)
    setSelectedCups(event.target.value)
    setSelectedReason(event.target.value)
    setSelectedTime(event.target.checked)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label for="favouriteCoffee">
            <h1> 1.What type of coffee do you prefer?</h1>{' '}
            <input
              type="text"
              value={favouriteCoffee}
              onChange={handleInputChange}
            />
          </label>
          {selectedCups.map((cups) => (
            <label key={cups}>
              <h1>2.How many cups of coffee do you typically drink per day?</h1>
              <input
                type="radio"
                value={cups}
                onChange={handleInputChange}
                checked={selectedCup === cups}
              />
              {cups}
            </label>
          ))}
          <label>
            <h1>3.What motivates you to drink coffee?</h1>
            <select onChange={handleInputChange} value={selectedReason}>
              <option value="">Select a reason:</option>
              <option value="Energy boost">Energy boost</option>
              <option value="Taste preference">Taste preference</option>
              <option value="Socialization">Socialization</option>
              <option value="Ritual/habit">Ritual/habit</option>
              <option value="Warmth/comfort">Warmth/comfort</option>
            </select>
          </label>
          {selectedTimes.map((time) => (
            <label key={time}>
              <h1>4.When do you usually drink coffee?</h1>
              <input
                type="checkbox"
                value={time}
                onChange={handleInputChange}
                checked={selectedTime === time}
              />
              {time}
            </label>
          ))}
          <button type="submit">Submit your answer</button>
        </form>
      </div>
    )
  }
}
