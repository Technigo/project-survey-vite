
import './name.css'

export const Name = ({value, updateFormData}) => {
  const userName= (e) => updateFormData("name", e.target.value) 
  {/*the userName function is triggered by the onChange event (when user passes in its name) The userName funtion then calls the updateFormData (that is passed from the Survey.jsx), updating the the name field in the state of Survey.jsx */}
  
  return (
    <div className="name-input">
        
          <p id="name-description">Please tell us your name</p>
          <input 
            type="text" 
            value = {value} 
            onChange={userName}
            aria-labelledby='name-description' //Added this for accessibility as the <label> is removed.
          />
        
    </div>
  )
}

