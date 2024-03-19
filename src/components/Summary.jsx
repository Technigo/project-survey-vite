export const Summary = ({ name, setName, age, setAge, setShowSummary }) => {

  const clearForm = () => {
    setName('')
    setAge('')
    setShowSummary(false)
  }

  
  return (
    <div>
      <h2>Thank you for doing our Happy Easter Survey!</h2>
      <p>Your name is {name} and you are {age} years old.</p>
      <button onClick={clearForm}>Restart</button>
    </div>
  )
}
