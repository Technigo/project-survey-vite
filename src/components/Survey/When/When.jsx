

import './when.css'

export const When = ({value, updateFormData}) => {
  const selectedWhen = (e) => updateFormData ("when", e.target.value)
  
  return (
    <div className="radio-container" aria-labelledby='when-description'> {/*Added for accessibility reasons */}
      <p id="when-description ">
        When would you like to go on your adventure?</p>
        <div className='radio-buttons'>
        <label>
          <input
          type="radio"
          name="month"
          value="June"
          onChange={selectedWhen}
          checked ={value === "June"} 
          />
          June
        </label>

        <label>
          <input
          type="radio"
          name="month"
          value="July"
          onChange={selectedWhen}
          checked ={value === "July"} 
          />
          July
        </label>

        <label>
          <input
          type="radio"
          name="month"
          value="August"
          onChange={selectedWhen}
          checked ={value === "August"}
          />
          August 
        </label>
        </div>

      
    </div>
  )
}


