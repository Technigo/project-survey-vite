import { useState } from "react"
import "./NameInput.css"

export const NameInput = ({ onNext }) => {
    const [name, setName] = useState('')

    const nextQuestion = () => {
        onNext({ name })
    }

    return (
      <div className="nameinput-wrapper">
        <h3>Please tell us your name</h3>
          <label className="nameinput-container">
            Name:
            <input type="text" value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
          </label>
          <button onClick={nextQuestion}>Next question</button>
      </div>
    )
}