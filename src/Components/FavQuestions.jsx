import PropTypes from "prop-types";

export const FavQuestions = ({fav, onChangeFav}) => {
  return (               
    <div className="checkbox-questions">
        
      <label>What is your favourite exercise?</label>

      <div className="favourite-options">
        <label>
          <input type="checkbox" name="walking" id="walking" value="Walking" onChange={onChangeFav} /> 
            Walking
        </label>
        
        <label>
          <input type="checkbox" name="running" id="running" value="Running" onChange={onChangeFav} />
            Running
        </label>
        
        <label> 
          <input type="checkbox" name="gym" id="gym" value="Going to the gym" onChange={onChangeFav} />
            Going to the gym
        </label>
        
        <label>
          <input type="checkbox" name="swimming" id="swimming" value="Swimming" onChange={onChangeFav} /> 
            Swimming
        </label>

        <label>
          <input type="checkbox" name="yoga" id="yoga" value="Doing Yoga" onChange={onChangeFav} /> 
            Doing Yoga
        </label>

        <label>
          <input type="checkbox" name="hiking" id="hiking" value="Hiking" onChange={onChangeFav} /> 
            Hiking
        </label>

        <label>
          <input type="checkbox" name="climbing" id="climbing" value="Climbing" onChange={onChangeFav} /> 
            Climbing
        </label>

        <label>
          <input type="checkbox" name="biking" id="biking" value="Biking" onChange={onChangeFav} /> 
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

