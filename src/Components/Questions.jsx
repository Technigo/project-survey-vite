/* eslint-disable react/no-unescaped-entities */
import { FavQuestions } from "./FavQuestions";
import { InfoQuestions } from "./InfoQuestions";
import { Buttons } from "./Buttons";
import { Summary } from "./Summary";
import { useState } from "react";
import { TrainingFrequency } from "./TrainingFrequency";
import { FitnessGoal } from "./FitnessGoal";
import { LivingArea } from "./LivingArea";

export const Questions = () => {

  const [step, setStep] = useState(1);
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    /* Something else here */
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
  const submit = ()=>{
    setStep(5)
 
  }

    return (
      <>
        {/* Add steps here */}
        <form action="" onSubmit={handleSubmit} required>
          {step === 1 && 
            <InfoQuestions />
          }
          {step === 2 && 
            <LivingArea />
          }
          {step === 3 && 
            <FavQuestions />
          }
          {step === 4 && 
            <TrainingFrequency />
          }
           {step === 5 && 
            <FitnessGoal />
          }

        </form>
          <Buttons onBack={back} onNext={next} currentStep={step} onSubmit={submit} />
        <Summary />
      </>
      
    );
};