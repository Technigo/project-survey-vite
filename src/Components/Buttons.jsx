/* eslint-disable react/prop-types */


export const Buttons = ({onBack, onNext, currentStep}) => {


  return (
    <div className="buttons">
        {currentStep > 1 && 
          <button className="back-btn" onClick={onBack}>Back</button>
        }
        
        <button className={`next-btn`} onClick={onNext}>Next</button>
    </div>
  )
}
