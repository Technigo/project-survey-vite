import "./App.css"
import { Header } from "./components/Header"
import { Survey } from "./components/Survey"
// import { Spell } from "./components/Spell"
// import { Character } from "./components/Character"
// import { Submit } from "./components/Submit"

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