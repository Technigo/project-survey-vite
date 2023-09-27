/* eslint-disable react/prop-types */


export const FavQuestions = ({fav, onChangeFav}) => {
  return (               
    <div className="checkbox-questions">
        
      <label>What is your favourite exercise?</label>

      <div className="favourite-options">
        <label htmlFor="walking">
          <input type="checkbox" name="walking" id="walking" value="Walking" checked={fav === "Walking"} onChange={onChangeFav} /> 
            Walking
        </label>
        
        <label htmlFor="running">
          <input type="checkbox" name="running" id="running" value="Running" checked={fav=== "Running"} onChange={onChangeFav} />
            Running
        </label>
        
        <label htmlFor="gym"> 
          <input type="checkbox" name="gym" id="gym" value="Going to GYM" checked={fav === "Going to GYM"} onChange={onChangeFav} />
            Going to GYM
        </label>
        
        <label htmlFor="swimming">
          <input type="checkbox" name="swimming" id="swimming" value="Swimming" checked={fav === "Swimming"} onChange={onChangeFav} /> 
            Swimming
        </label>

        <label htmlFor="yoga">
          <input type="checkbox" name="yoga" id="yoga" value="Doing Yoga" checked={fav === "Doing Yoga"} onChange={onChangeFav} /> 
            Doing Yoga
        </label>

        <label htmlFor="hiking">
          <input type="checkbox" name="hiking" id="hiking" value="Hiking" checked={fav === "Hiking"} onChange={onChangeFav} /> 
            Hiking
        </label>

        <label htmlFor="climbing">
          <input type="checkbox" name="climbing" id="climbing" value="Climbing" checked={fav === "Climbing"} onChange={onChangeFav} /> 
            Climbing
        </label>

        <label htmlFor="other">
          <input type="checkbox" name="other" id="other" value={"Other"} checked={fav === "Others"} onChange={onChangeFav} /> 
            Other
        </label>
      </div>                
    </div>
  )
}
