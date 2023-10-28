import React, { useState } from 'react'
import '../App.css'
import { Thanks } from './Thanks'
import Name from './Name'
// Import other step components (Age, Email, etc.) here

export const MainForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    city: '',
    job: '',
    favmovie: ''
  })

  const [currentStep, setCurrentStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const updateFormData = (field, value) => {
    setFormData(previous => ({ ...previous, [field]: value }))

    const nextStep = () => {
      if (currentStep < 6 && validateStep(currentStep)) {
        setCurrentStep(currentStep + 1)
      }
    }

    const prevStep = () => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1)
      }
    }

    //Function for validating the step
    const validateStep = step => {
      switch (step) {
        case 1:
          return formData.name.trim().length >= 3
        case 2: {
          const age = parseInt(formData.age, 10)
          return !isNaN(age) && age >= 1 && age <= 99
        }
        case 3: {
          const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
          return emailRegex.test(formData.email)
        }
        case 4:
          return formData.city !== ''
        case 5:
          return formData.job !== ''
        case 6:
          return formData.favmovie !== ''
        default:
          return true
      }
    }

    //Function for handling form submission
    const submitForm = () => {
      // Format the data and show an alert message with it
      const formattedData = `Hello, your name is ${formData.name}. You are ${formData.age} years old, and you live in ${formData.city}. You work as a ${formData.job}, and your favorite movie is "${formData.favmovie}". We can reach you at ${formData.email}.`
      const alertMessage = `You have submitted the form with the following data: ${formattedData}`
      alert(alertMessage)

      //Submit the form
      setSubmitted(true)
    }

    //Function to start survey
    const startSurvey = () => {
      setCurrentStep(1)
      console.log('Survey started')
      {
        currentStep === 1 && (
          <Name
            formData={formData}
            updateFormData={updateFormData}
            validateStep={validateStep}
          />
        )
      }
    }
    const restartSurvey = () => {
      setCurrentStep(1)
      setFormData({
        name: '',
        age: '',
        email: '',
        city: '',
        job: '',
        favmovie: ''
      })
      setSubmitted(false)
    }

    //Render the form
    return (
      <div>
        {submitted ? (
          <Thanks />
        ) : (
          <div>
            {currentStep === 0 ? (
              <div className='button-container'>
                <div className='start-button'>
                  <button onClick={() => setCurrentStep(1)}>Start survey</button>
                </div>
              </div>
            ) : null}
  
            {currentStep === 1 ? (
              <Name
                formData={formData}
                updateFormData={updateFormData}
                validateStep={validateStep}
              />
            ) : null}
  
            {/* Render other form steps conditionally based on currentStep */}
            {/* For example: 
            {currentStep === 2 ? <Age /> : null}
            {currentStep === 3 ? <Email /> : null}
            ... and so on
            */}
          </div>
        )}
      </div>
    );
  }
}
