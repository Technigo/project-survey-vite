export const Email = ({ formError, onChange }) => {
  const handleEmailInput = (event) => {
    onChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>
        <h3>3.</h3>
        <p>
          Finally, please enter your email address so that we may get in contact
          with you
        </p>
      </legend>
      <input
        type="email"
        placeholder="your.email@email.com"
        onChange={handleEmailInput}
      />
      <span className="error-message">{formError}</span>
    </fieldset>
  );
};
