import React from 'react'

export const Loveact = ({ loveAct, setLoveAct }) => {
  const handleLoveAct = (event) => {
    setLoveAct(event.target.value)
  }

  return (
    <form className="love-act-form" onSubmit={(event) => event.preventDefault()} required>
      what would you do..
      <select
        className="love-act-drop-down"
        value={loveAct}
        onChange={handleLoveAct}
        key="{loveAct}">
        <option value="">..if you see someone that you used to see at nightmare</option>
        <option value="hug">cry</option>
        <option value="gentle pat">kill</option>
        <option value="kiss on the cheek">escape</option>
        <option value="cuddle">question</option>
      </select>
    </form>
  )
}