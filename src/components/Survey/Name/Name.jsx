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
  {/*Vi har skickat in funktionen updateFormData som en prop från Survey.jsx. Den tar emot två variabler (field, value) Så här bestämmer vi att field=name och value=e.target.value. Infon från updateFormData kommer in i userName på något sätt? För userName-funktionen skriver vi in som funktionen som sker när man trycker på onChange nedan. */}
  return (
    <div className="name-input">
        <label>
          Name: 
        <input type="text" value = {value} onChange={userName} />
        </label>
    </div>
  )
}

