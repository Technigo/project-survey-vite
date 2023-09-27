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
  const selectedWhen = (e) => updateFormData ("when", e.target.value); 
  
  return (
    <div className="radio-container">
      <label>
        When would you like to go on your adventure: 
        <label>
          <input
          type="radio"
          name="month"
          value="june"
          onChange={selectedWhen}
          checked ={value === "june"} 
          />
          June
        </label>

        <label>
          <input
          type="radio"
          name="month"
          value="july"
          onChange={selectedWhen}
          checked ={value === "july"} 
          />
          July
        </label>

        <label>
          <input
          type="radio"
          name="month"
          value="august"
          onChange={selectedWhen}
          checked ={value === "august"}
          />
          August 
        </label>

      </label>
    </div>
  )
}


