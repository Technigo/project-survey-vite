import { Name } from "./components/Q1Name"
import { DestinationType } from "./components/Q2DestType"
import { Period } from "./components/Q3Period"

export const App = () => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Name />
      <DestinationType />
      <Period />
      <button type="submit">Submit</button>
    </form>
  )
}
