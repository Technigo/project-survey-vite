import { useState } from "react"
import { ButtonNext } from "./Buttons/ButtonNext/ButtonNext.jsx";
import "./SeasonRadio.css"

export const SeasonRadio = ({ onNext }) => {
   
    const [season, setSeason] = useState('')

    //kan jag ha const nextQuestion i flera componenter? 
    const nextQuestion = () => {
        onNext({ season })
    }

    return (
        <div className="seasonradio-wrapper">
           <h3>Would you like to go on a summer or winter vacation?</h3>
           <label className="seasonradio-container">
              <input type="radio" name="season-choice" value="summer" onChange={(e) => setSeason(e.target.value)} />
              <span className="custom-radio"></span>
              Summer
           </label>
           <label className="seasonradio-container">   
              <input type="radio" name="season-choice" value="winter" onChange={(e) => setSeason(e.target.value)} />
              <span className="custom-radio"></span>
              Winter
           </label>
          <ButtonNext />
        </div>
    )
}