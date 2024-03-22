export const BackSubmitButtons = ({ onNext, onBack, disabled }) => {
  const handleSubmit = () => {
    onNext();
  };
  return (
    <>
      <div className="back-next-buttons">
        <button className="back-button" onClick={onBack}>
          Back
        </button>
        <button onClick={handleSubmit} disabled={disabled}>
          Submit
        </button>
      </div>
      <p className="warning-on">You have to fill the questions available.</p>
    </>
  );
};
