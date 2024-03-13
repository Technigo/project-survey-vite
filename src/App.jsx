import { useState } from "react"
import { Name } from "./components/Q1Name"
import { DestinationType } from "./components/Q2DestType"
import { Period } from "./components/Q3Period"
import { Budget } from "./components/Q4Budget"
import { Summary } from "./components/Summary"
import "./App.css"

export const App = () => {
  const [showSummary, setShowSummary] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    destinationType: "",
    period: "",
    budget: "",
  })

  //Function to show summary after submit
  const handleSubmit = (event) => {
    event.preventDefault()
    setShowSummary(true)
  }

  //Function to handle when input is changed
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className="app-body">
      <header className="header">
        <h1>Surprise Holiday</h1>
        <h2>by Alma and Linda</h2>
      </header>
      {showSummary ? (
        <Summary {...formData} />
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <Name onInputChange={handleInputChange} />
          <DestinationType onInputChange={handleInputChange} />
          <Period onInputChange={handleInputChange} />
          <Budget onInputChange={handleInputChange} />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}
