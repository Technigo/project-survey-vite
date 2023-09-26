/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

export const FavQuestions = () => {
    const [favourite , setFavourite] = useState("Other")

    const onRadioChange = (e)=>{
        setFavourite(e.target.value)

    }

  return (
    
                   
        <div className="radio-question">What is your favourite exercise?
           
           <label htmlFor="walking">Walking
           <input type="radio" name="walking" id="walking" value={"Walking"} checked={favourite === "Walking"} onChange={onRadioChange} /> 
             
           </label>
           <label htmlFor="running">Running
           <input type="radio" name="running" id="running" value={"Running"} checked={favourite === "Running"} onChange={onRadioChange} />
             
           </label>
           <label htmlFor="gym"> Going to GYM
           <input type="radio" name="gym" id="gym" value={"Going to GYM"} checked={favourite === "Going to GYM"} onChange={onRadioChange} />
             
           </label>
           <label htmlFor="swimming">Swimming
           <input type="radio" name="swimming" id="swimming" value={"Swimming"} checked={favourite === "Swimming"} onChange={onRadioChange} /> 
             
           </label>
           <label htmlFor="other">Other
           <input type="radio" name="other" id="other" value={"Other"} checked={favourite === "Others"} onChange={onRadioChange} /> 

           </label>
               
           </div>
    
  )
}
