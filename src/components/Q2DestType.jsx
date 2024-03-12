import { useState } from "react"

export const DestinationType = () => {
  const [destinationType, setDestinationType] = useState("")
  return (
    <select
      onChange={(event) => setDestinationType(event.target.value)}
      value={destinationType}>
      <option value="" disabled>
        Select destination type
      </option>
      <option value="beach">Beach</option>
      <option value="mountain">Mountain</option>
      <option value="city">City</option>
      <option value="desert">Desert</option>
      <option value="lake">Lake</option>
      <option value="jungle">Jungle</option>
      <option value="underwater">Underwater</option>
      <option value="space">Space</option>
    </select>
  )
}
