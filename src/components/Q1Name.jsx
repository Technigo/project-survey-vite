import { useState } from "react"

export const Name = () => {
  const [name, setName] = useState("")
  return (
    <input
      type="text"
      onChange={(event) => setName(event.target.value)}
      value={name}
    />
  )
}
