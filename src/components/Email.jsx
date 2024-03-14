import { useState } from "react";

export const Email = ({ formError, onChange }) => {
  const [email, setEmail] = useState("");

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
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
        value={email}
        onChange={handleEmailInput}
      />
      <p className="error-message">{formError}</p>
    </fieldset>
  );
};
