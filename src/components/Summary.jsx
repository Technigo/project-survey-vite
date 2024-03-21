export const Summary = ({ name, setName, age, setAge, celebrate, setCelebrate, best, setBest, holiday, setHoliday, setShowSummary }) => {

  const clearForm = () => {
    setName('')
    setAge('')
    setCelebrate('')
    setBest('')
    setHoliday('')
    setShowSummary(false)
  }

  return (
    <div className="summary">
      <h2>Thank you for doing our Easter Survey!</h2>
      <h3>Here is the summary of your answers:</h3>
      <p>Your name is {name}, you are {age} years old and you {celebrate} Easter.</p>
      <p>The best thing about Easter is to {best} and your favourite holiday is {holiday}.</p>
      <button onClick={clearForm}>Restart survey</button>
    </div>
  )
}
