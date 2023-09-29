
import './name.css'

export const Name = ({value, updateFormData}) => {
  const userName= (e) => updateFormData("name", e.target.value) 
  
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

