import PropTypes from "prop-types";

export const FavQuestions = ({fav, onChangeFav}) => {
  return (               
    <div className="checkbox-questions">
        
      <label>What is your favourite exercise?</label>

      <div className="favourite-options">
        <label htmlFor="walking">
          <input type="radio" name="walking" id="walking" value="Walking" checked={fav === "Walking"} onChange={onChangeFav} /> 
            Walking
        </label>
        
        <label htmlFor="running">
          <input type="radio" name="running" id="running" value="Running" checked={fav=== "Running"} onChange={onChangeFav} />
            Running
        </label>
        
        <label htmlFor="gym"> 
          <input type="radio" name="gym" id="gym" value="Going to GYM" checked={fav === "Going to GYM"} onChange={onChangeFav} />
            Going to GYM
        </label>
        
        <label htmlFor="swimming">
          <input type="radio" name="swimming" id="swimming" value="Swimming" checked={fav === "Swimming"} onChange={onChangeFav} /> 
            Swimming
        </label>

        <label htmlFor="yoga">
          <input type="radio" name="yoga" id="yoga" value="Doing Yoga" checked={fav === "Doing Yoga"} onChange={onChangeFav} /> 
            Doing Yoga
        </label>

        <label htmlFor="hiking">
          <input type="radio" name="hiking" id="hiking" value="Hiking" checked={fav === "Hiking"} onChange={onChangeFav} /> 
            Hiking
        </label>

        <label htmlFor="climbing">
          <input type="radio" name="climbing" id="climbing" value="Climbing" checked={fav === "Climbing"} onChange={onChangeFav} /> 
            Climbing
        </label>

        <label htmlFor="biking">
          <input type="radio" name="biking" id="biking" value="Biking" checked={fav === "Biking"} onChange={onChangeFav} /> 
            Biking
        </label>
      </div>                
    </div>
  )
};

FavQuestions.propTypes = {
  fav: PropTypes.string,
  onChangeFav: PropTypes.func
};

