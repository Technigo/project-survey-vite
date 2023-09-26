import React, { useState } from 'react'
import './name.css'

export const Name = () => {
  const [name, setName] = useState('')

  const handleNameInput = (event) => {
    setName(event.target.value)
    console.log(name)
  
  }


  return (
    <div className="name-input">
      <label>
        Name: 
      <input type="text" value = {name} onChange={handleNameInput} />
      </label>
      <p>Current state: {name}</p>
    </div>
  )
}
