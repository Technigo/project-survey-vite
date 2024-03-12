import { Name } from "./components/Q1Name"

export const App = () => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Name />
      <button type="submit">Submit</button>
    </form>
  )
}
