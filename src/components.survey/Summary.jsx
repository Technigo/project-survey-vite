export const Summary = ({username, age, answer1, answer2, answer3 }) => {
  return (
    <div className="survey-summary">
      <label>Let´s see how your day looks:</label>
      <p>Name: {username} </p>
      <p>Age: {age} </p>
      <p>Attention: {answer1} </p>
      <p>Hyperfocused: {answer2} </p>
      <p>Tabs Opened: {answer3} </p>
    </div>
  )
}


