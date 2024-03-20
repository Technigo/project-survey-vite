export const Summary = ({ name, setName, age, setAge, setShowSummary }) => {

  const clearForm = () => {
    setName('')
    setAge('')
    setShowSummary(false)
  }

  return (
    <div>
      <h2>Thank you for doing our Easter Survey!</h2>
      <h3>Here is the summary of your answers:</h3>
      <p>Your name is {name} and you are {age} years old.</p>
      <p>The best thing about Easter is and your favourite holiday is.</p>
      <button onClick={clearForm}>Restart survey</button>
    </div>
  )
}
