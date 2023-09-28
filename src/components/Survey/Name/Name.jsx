// import React, { useState } from 'react'
// import './name.css'

// export const Name = () => {
//   const [name, setName] = useState('')

//   const handleNameInput = (event) => {
//     setName(event.target.value)
//     console.log(name)
  
//   }


//   return (
//     <div className="name-input">
//       <label>
//         Name: 
//       <input type="text" value = {name} onChange={handleNameInput} />
//       </label>
//       <p>Current state: {name}</p>
//     </div>
//   )
// }


//NEDAN FÖLJER KOD ENLIGT DIEGOS EXEMPEL

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

