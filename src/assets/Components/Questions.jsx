/* eslint-disable react/no-unescaped-entities */
import { FavQuestions } from "./FavQuestions";
import { InfoQuestions } from "./InfoQuestions";
import { Buttons } from "./Buttons";
import { Summary } from "./Summary";
import { useState } from "react";

export const Questions = () => {

  const [step, setStep] = useState(1);
  
  const handleSubmit = (e)=>{
    e.preventDefault()

  }
  const next = () => {
      setStep((prevStep) => {
          return prevStep + 1
      })
  }

  const back = () => {
    setStep((prevStep) => {
      return prevStep - 1
  })
  }
    return (
      <>
        {/* Add questions here */}
        <form action="" onSubmit={handleSubmit} required>
          {step === 1 && 
            <InfoQuestions />
          }
          {step === 2 && 
            <FavQuestions />
          }
        </form>
        
          <Buttons onBack={back} onNext={next} currentStep={step} />
 
   
        <Summary />
      </>
      
    );
};