import "./SeasonRadio.css"
import propTypes from 'prop-types';

SeasonRadio.propTypes = {
   updateFormData: propTypes.func,
   value: propTypes.string
}

export const SeasonRadio = ({ updateFormData, value }) => {
   
    const season = (e) => updateFormData("season", e.target.value);

    return (
        <div className="seasonradio-wrapper">
           <h3>Would you like to go on a summer or winter vacation?</h3>
           <label className="seasonradio-container">
              <input type="radio" name="season-choice" value="summer" onChange={season} checked={value === "summer"} />
              <span className="custom-radio"></span>
              Summer
           </label>
           <label className="seasonradio-container">   
              <input type="radio" name="season-choice" value="winter" onChange={season} checked={value === "winter"} />
              <span className="custom-radio"></span>
              Winter
           </label>
        </div>
    )
}