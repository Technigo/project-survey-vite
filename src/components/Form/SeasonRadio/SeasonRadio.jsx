import "./SeasonRadio.css"

export const SeasonRadio = ({ updateFormData, value }) => {
   
    const season = (e) => updateFormData("season", e.target.value);

    return (
        <div className="seasonradio-wrapper">
           <h3>Are you longing for the sun, or for the winter snow?</h3>
           <label className="label-small">
            <label className="seasonradio-container">
               <input type="radio" name="season-choice" value="summer" onChange={season} checked={value === "summer"} />
               <span className="custom-radio"></span>
               Summer!
            </label>
            <label className="seasonradio-container">   
               <input type="radio" name="season-choice" value="winter" onChange={season} checked={value === "winter"} />
               <span className="custom-radio"></span>
               Winter!
            </label>
           </label>
        </div>
    )
}