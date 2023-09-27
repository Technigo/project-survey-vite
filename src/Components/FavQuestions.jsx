

import { useState } from "react";

export const FavQuestions = () => {
    const [favourite , setFavourite] = useState("Other");

    const onRadioChange = (e) => {
        setFavourite(e.target.value);
    }

  return (               
    <div className="checkbox-questions">
        
      <label>What is your favourite exercise?</label>

      <div className="favourite-options">
        <label htmlFor="walking">
          <input type="checkbox" name="walking" id="walking" value={"Walking"} checked={favourite === "Walking"} onChange={onRadioChange} /> 
            Walking
        </label>
        
        <label htmlFor="running">
          <input type="checkbox" name="running" id="running" value={"Running"} checked={favourite === "Running"} onChange={onRadioChange} />
            Running
        </label>
        
        <label htmlFor="gym"> 
          <input type="checkbox" name="gym" id="gym" value={"Going to GYM"} checked={favourite === "Going to GYM"} onChange={onRadioChange} />
            Going to GYM
        </label>
        
        <label htmlFor="swimming">
          <input type="checkbox" name="swimming" id="swimming" value={"Swimming"} checked={favourite === "Swimming"} onChange={onRadioChange} /> 
            Swimming
        </label>

        <label htmlFor="other">
          <input type="checkbox" name="other" id="other" value={"Others"} checked={favourite === "Others"} onChange={onRadioChange} /> 
            Other
        </label>
      </div>                
    </div>
  )
}
