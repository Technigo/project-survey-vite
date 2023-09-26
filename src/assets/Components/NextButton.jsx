import { useState } from "react"


export const NextButton = () => {
    const [currentStep , setCurrentStep] = useState(1)

    const calcStep = ()=>{
        setCurrentStep(( currentStep)=>{
            return currentStep++
        })
    }

  return (
    <div className="buttons">
        
        <button className="back-btn">Back</button>
        <button className={`next-btn ${currentStep}`} onClick={calcStep}>Next</button>
    </div>
  )
}
