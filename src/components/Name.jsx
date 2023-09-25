import React from 'react'

export const Name = ({ name, setName }) => {
  const handleName = (event) => {
    setName(event.target.value)
  }
  return (
    <form className="name-form" onSubmit={(event) => event.preventDefault()} required>
      what do you want to be written at your graveyard
      <input aria-label="name input" type="text" required value={name} onChange={handleName} />
    </form>
  )
}