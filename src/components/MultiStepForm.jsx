//IMPORT COMPONENTS//
import { useState } from "react"
import { Story } from "./Story"
import { Number } from "./Number"
import { Antagonist } from "./Antagonist"
import { Setting } from "./Setting"
import { Sound } from "./Sound"
import { Weather } from "./Weather"
import { Name } from "./Name"

//EXPORT THIS COMPONENT//
export const MultiStepForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    chooseWeather: "",
    chooseAntagonist: "",
    chooseSound: "",
    setLocation: "",
  })

  //FUNCTION TO UPDATE FORM DATA BASED ON FIELD AND VALUE//
  //The updateFormData function takes a field and a value, and updates the formData state by creating a new object that contains all the previous properties and values, but with the specified field updated to the new value.
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }))
  }


  //GOING BACK AND FORTH BETWEEN QUESTIONS//
  //State to track the current step in the form
  const [currentStep, setCurrentStep] = useState(1);
  //Function to move to the next step in the form
  const nextStep = () => {
    if (currentStep < 7) setCurrentStep(currentStep + 1)
  }
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }


  //FUNCTION TO RELOAD PAGE//
  //In here we also create new buttons, and display the story//
  const reloadPage = () => {
    window.location.reload()
    console.log(formData);
    `
    Name: ${formData.name}
    Number: ${formData.number}
    Weather: ${formData.chooseWeather}
    Antagonist: ${formData.chooseAntagonist}
    Sound: ${formData.chooseSound}
    Setting: ${formData.setLocation}
    `
  }

  return (
    <div>
      {/* Render the Name component if on step 1 */}
      {currentStep === 1 && (
        <Name value={formData.name} updateFormData={updateFormData} />
      )}
      {/* Render the number component if on step 2 */}
      {currentStep === 2 && (
        <Number value={formData.number} updateFormData={updateFormData} />
      )}
      {/* Render the setting if on step 3 */}
      {currentStep === 3 && (
        <Setting value={formData.setLocation} updateFormData={updateFormData} />
      )}
      {/* Render the weather component if on step 4 */}
      {currentStep === 4 && (
        <Weather value={formData.chooseWeather} updateFormData={updateFormData} />
      )}
      {/* Render the antagonist component if on step 5 */}
      {currentStep === 5 && (
        <Antagonist value={formData.chooseAntagonist} updateFormData={updateFormData} />
      )}
      {/* Render the sound component if on step 6 */}
      {currentStep === 6 && (
        <Sound value={formData.chooseSound} updateFormData={updateFormData} />
      )}
      {/* Render the story board with all user's input */}
      {currentStep === 7 && (
        <Story formData={formData} />
      )}
      <div className="buttons">
        {(currentStep > 1 && currentStep <= 6) && <button className="back-btn" onClick={prevStep}>Back</button>}
        {/* Show Next button up to 5th step */}
        {currentStep < 6 && <button className="next-btn" onClick={nextStep}>Next choice</button>}
        {/* Change button msg on 6th and last form input */}
        {currentStep === 6 && <button className="create-btn" onClick={nextStep}>Scare me!</button>}
        {/* Reload whole story-telling app */}
        {currentStep === 7 && <button className="reload-btn" type="submit" onClick={reloadPage}>New story!</button>}
      </div>
    </div>
  )
}










