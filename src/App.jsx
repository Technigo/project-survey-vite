import "./App.css"
import { Header } from "./components/Header"
import { House } from "./components/House"

export const App = () => {
  return (
    <div>
      <Header />
      <div className="form-container">
        <House />
      </div>
    </div>
  )
};