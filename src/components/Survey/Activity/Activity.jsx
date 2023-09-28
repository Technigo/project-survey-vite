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
      <label> Activity:</label>
      <select value={value} onChange={selectedActivity}>
      <option disabled value="">Choose an adventure!</option>
      <option value="Hiking Jämtlandstriangeln">Hiking Jämtlandstriangeln</option>
      <option value="Cycling Lindvallen">Cycling Lindvallen</option>
      <option value="Canoeing Koster islands">Canoeing Koster islands</option>
        </select>
        </div>
  )
}
