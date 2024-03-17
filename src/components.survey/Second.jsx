import { useState } from "react"

export const Second = () => {
const [second, setSecond] = useState("")

const handleYesClick = () => {
    setSecond("yes")
}

const handleNoClick = () => {
    setSecond("no")
}

  return (
    <div className="yesNo-question">
    <label htmlFor="question2">
        Have you ever accidentally hyperfocused on something for hours, forgetting to eat, sleep, or even blink?
        </label>
        <div>
           <button onClick={handleYesClick}>Yes</button>
            <button onClick={handleNoClick}>No</button>
        </div>
    {second && <p>Your Answer: {second}</p>}
</div>    
  )
}


//try to understand focus