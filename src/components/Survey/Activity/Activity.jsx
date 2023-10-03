import './activity.css'

export const Activity = ({ value, updateFormData }) => {
  const selectedActivity = (e) => updateFormData("activity", e.target.value)

  //Rendering a select drop-down
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
