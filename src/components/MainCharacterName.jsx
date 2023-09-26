import { useState } from "react"

export const MainCharacterName = () => {

  const [name, setName] = useState('');

  return (
    <form className="main-character-name-form">
      <h2>Choose a name for your adventurer: {name}</h2>
      <input
        aria-label="adventurer name input"
        type="text"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </form>
  )
}

