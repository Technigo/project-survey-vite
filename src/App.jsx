import "./App.css"
import { Header } from "./components/Header"
import { Survey } from "./components/Survey"

export const App = () => {
  
  return (
    <div>
      <Header />
      <div className="form-wrapper">
        <Survey />
      </div>
    </div>
  )
};