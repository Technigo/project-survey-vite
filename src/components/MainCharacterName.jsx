import { useState } from "react"

export const MainCharacterName = () => {

  const [name, setName] = useState('');

  return (
    <form>
      <h1>Choose a name for your adventurer: {name}</h1>
      <input
        aria-label="adventurer name input"
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  )
}

