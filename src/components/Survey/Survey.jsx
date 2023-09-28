//Imports
import React, { useState } from 'react'

import { Name } from './Name/Name'
import { Activity } from './Activity/Activity'
import { When } from './When/When'

import './survey.css'

export const Survey = () => {
  //Defining state variable to manage form data:
  const [formData, setFormData] = useState({
    name: '',
    activity: '',
    when: '',
  })

  //Defining state variable to track current step in survey:  
  const [currentStep, setCurrentStep] = useState(1)

  // Defining state variable to flag when form is submitted: 
  const [submitted, setSubmitted] = useState(false)

  //Function to update form data
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }))
  };

  //Function to navigate to the next step
  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  };

  //Function to navigate to the previous step
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  };

  //Function to submit form
  const submitForm = () => {
    setSubmitted(true);  // Set the submitted flag to true
  };

  //Function to handle key press for "Next" button
  const handleKeyPress  = (e) => {
    if (e.key === 'Enter'){
      nextStep()
    }
  }

  //Conditionally renders the components based on currentStep and submission. The '!submitted &&' makes the question/text disappear when going to the next step.
  return (
    <div className="survey-container">
      {currentStep === 1 && !submitted && (
        <Name value={formData.name} updateFormData={updateFormData} />
      )}

      {currentStep === 2 && !submitted && (
        <Activity value={formData.activity} updateFormData={updateFormData} />
      )}

      {currentStep === 3 && !submitted && (
        <When value={formData.when} updateFormData={updateFormData} />
      )}

      {submitted ? ( // Conditionally render submitted data if the form is submitted
        <div className='sumbitted-data'>
          <h2>Submitted Data:</h2>
          <p>Name: {formData.name}</p>
          <p>Activity: {formData.activity}</p>
          <p>When: {formData.when}</p>
        </div>
      ) : (
        // If form is not submitted, buttons will be displayed
        <div>
          {/*"Back" will show for step 2-3: */}
          {currentStep > 1 && <button onClick={prevStep}>Back</button>}
          {/*Ternary logic for when "Next" and "Submit" displays: */}
          {currentStep < 3 ? (
            <button onClick={nextStep}>Next</button>
          ) : (
            <button onClick={submitForm}>Submit Form</button>
          )}
        </div>
      )}
    </div>
  )
}
