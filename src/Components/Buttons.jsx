import PropTypes from "prop-types";

export const Buttons = ({onBack, onNext, currentStep, onSubmit, onRestart}) => {
  return (
    <div className="buttons">
      {currentStep > 1 && currentStep < 5 &&
        <button type="button" className="back-btn" onClick={onBack}>Back</button>
      }
      
      { currentStep < 5 &&
        <button type="button" className="next-btn" onClick={onNext}>Next</button>
      }
      
      { currentStep === 5 &&
        <button type="button" className="submit-btn" onClick={onSubmit}>Submit</button>
      }    
      {currentStep === 6 && 
        <button type="button" className="restart" onClick={onRestart}>Restart survey</button>
      }           
    </div>
  )
};

Buttons.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func, 
  currentStep: PropTypes.number, 
  onSubmit: PropTypes.func, 
  onRestart: PropTypes.func
}