// import React, {useState} from 'react' 
// import './when.css'

// export const When = () => {
//   const [month, setMonth] = useState ()

//   const handleActivityInput = (event) => {
//     setMonth(event.target.value)
//   }
  
//   return (
//     <div className="radio-container">
//       <label>
//         When: 
//         <label>
//           <input
//           type="radio"
//           value="june"
//           onChange={handleActivityInput}
//           // checked ={month === "june"} När och hur ska vi sätta in detta i koden? 
//           />
//           June
//         </label>

//         <label>
//           <input
//           type="radio"
//           value="july"
//           onChange={handleActivityInput}
//           // checked ={month === "july"} När och hur ska vi sätta in detta i koden? 
//           />
//           July
//         </label>

//         <label>
//           <input
//           type="radio"
//           value="august"
//           onChange={handleActivityInput}
//           // checked ={month === "august"} När och hur ska vi sätta in detta i koden? 
//           />
//           August 
//         </label>

//       </label>
//     </div>
//   )
// }


import './when.css'

export const When = ({value, updateFormData}) => {
  const selectedWhen = (e) => updateFormData ("when", e.target.value)
  
  return (
    <div className="radio-container">
      <label>
        When would you like to go on your adventure: 
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

      </label>
    </div>
  )
}


