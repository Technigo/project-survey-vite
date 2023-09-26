

import { useState } from 'react'

export const FavQuestions = () => {
    const [favourite , setFavourite] = useState("Other")

    const onRadioChange = (e)=>{
        setFavourite(e.target.value)

    }

  return (
    
                   
        <div className="checkbox-questions">
            
            <label htmlFor="">What is your favourite exercise?</label>
           
           <label htmlFor="walking">Walking
           <input type="checkbox" name="walking" id="walking" value={"Walking"} checked={favourite === "Walking"} onChange={onRadioChange} /> 
             
           </label>
           <label htmlFor="running">Running
           <input type="checkbox" name="running" id="running" value={"Running"} checked={favourite === "Running"} onChange={onRadioChange} />
             
           </label>
           <label htmlFor="gym"> Going to GYM
           <input type="checkbox" name="gym" id="gym" value={"Going to GYM"} checked={favourite === "Going to GYM"} onChange={onRadioChange} />
             
           </label>
           <label htmlFor="swimming">Swimming
           <input type="checkbox" name="swimming" id="swimming" value={"Swimming"} checked={favourite === "Swimming"} onChange={onRadioChange} /> 
             
           </label>
           <label htmlFor="other">Other
           <input type="checkbox" name="other" id="other" value={"Others"} checked={favourite === "Others"} onChange={onRadioChange} /> 

           </label>
               
           </div>
    
  )
}
