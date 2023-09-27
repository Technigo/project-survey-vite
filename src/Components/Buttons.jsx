/* eslint-disable react/prop-types */


export const Buttons = ({onBack, onNext, currentStep, onSubmit}) => {
  return (
    <div className="buttons">
      {currentStep > 1 && 
        <button className="back-btn" onClick={onBack}>Back</button>
      }
      
      { currentStep < 5 &&
        <button className="next-btn" onClick={onNext}>Next</button>
      }
      
      { currentStep === 5 &&
        <button className="submit-btn" onClick={onSubmit}>Submit</button>
      }           
    </div>
  )
}
