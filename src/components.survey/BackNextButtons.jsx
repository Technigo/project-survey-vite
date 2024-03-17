export const BackNextButtons = ({onNext, onBack, disabled}) => {
    return (
      <>
        <div className="back-next-buttons">
          <button className="back-button" onClick={onBack}>Back</button>
          <button onClick={onNext} disabled={disabled}>Next</button>
        </div>
        <p className="warning-on">You have to fill the questions available.</p>
      </>
    )
  }
  