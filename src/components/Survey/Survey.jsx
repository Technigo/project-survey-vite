import {useState} from 'react'
import {Name} from './Name/Name'
import {Activity} from './Activity/Activity'
import {When} from './When/When'
import './survey.css'

export const Survey = () => {

  //Vi gör en ny state för datan vi får av användaren
const [formData, setFormData] = useState({
  name: "",
  activity: "",
  when: "",
})

//Function to update FormData and creates a new object that contains previous properties and values. Använder Diegos logik här för att uppdatera formData
const updateFormData = (field, value) => {
  setFormData((previous) => ({...previous, [field]: value}));
};

//Nedan följer en function som invokas när man trycker på Submitknappen
const submitForm = () => {
  console.log(formData)
  const formattedData = `
  Name: ${formData.name}
  Activity: ${formData.activity}
  When: ${formData.when}`

  alert(formattedData) 
  {/*Man kan antingen göra en alert eller en console.log här. Detta (formattedData)dyker upp när man trycker på Submitknappen */}
}


  
  return (
    <div className="survey-container">
      {/* adding default for onSubmit - look into deeper later on  */}
      <form onSubmit={event=> event.preventDefault()}>
      <Name value={formData.name} updateFormData={updateFormData}/> {/*Här skickar vi info in till Name-componenten. Först säger vi att value ska vara det som användaren har skrivit in som sitt namn. Sen säger vi att updateFormData-funktionen i Name.jsx ska vara den funktionen som vi har deklarerat här i Survey.jsx*/}
      <Activity value={formData.activity} updateFormData={updateFormData}/>
      <When value={formData.when} updateFormData={updateFormData}/>
      <button onClick={submitForm}>Click button to submit form</button>
      </form>
   
    </div>
  )
}
