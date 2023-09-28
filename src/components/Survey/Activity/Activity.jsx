/* eslint-disable react/prop-types */
//import React,{useState} from 'react'
//import './activity.css'

//export const Activity = () => {
  //const [selectedActivity, setSelectedActivity] = useState('default')
  //const handleActivityChange = (event) => {
    //setSelectedActivity(event.target.value)
  //}
  
  //return (
   // <div className="activity-select">
     // <label>
       // Activity: 
      //<select value={selectedActivity} onChange={handleActivityChange}>
      //<option value="default">Choose an adventure!</option>
      //<option value="option1">Hiking Jämtlandstriangeln</option>
      //<option value="option2">Cycling Lindvallen</option>
      //<option value="option3">Canoeing Koster-islands</option>
//      </select>
  //    <p>Selected activity: {selectedActivity}</p>
    //  </label>
    //</div>
  //)
//}

import './activity.css'

export const Activity = ({ value, updateFormData }) => {
  const selectedActivity = (e) => updateFormData("activity", e.target.value)

  return (
    <div className="activity-select">

      <p id="activity-description">Which adventure are you longing for?</p>
      <select 
        className="select-style"
        value={value} 
        onChange={selectedActivity}
        aria-labelledby='activity-description' //Added for accessibility purposes, as label was removed. (for styling reasons)
      >
      <option disabled value="">Choose an adventure!</option>
      <option value="Hiking in Jämtlandstriangeln">Hiking in Jämtlandstriangeln</option>
      <option value="Cycling in Lindvallen">Cycling in Lindvallen</option>
      <option value="Canoeing in Koster islands">Canoeing in Koster islands</option>
        </select>
        </div>
  )
}
