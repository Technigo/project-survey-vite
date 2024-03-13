import { Name } from "./components/Q1Name"
import { DestinationType } from "./components/Q2DestType"
import { Period } from "./components/Q3Period"
import { Budget } from "./components/Q4Budget"
import "./App.css"

export const App = () => {
  return (
    <div>
      <header className="header">
        <h1>Surprise Holiday</h1>
        <h2>by Alma and Linda</h2>
      </header>
      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <Name />
        <DestinationType />
        <Period />
        <Budget />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
