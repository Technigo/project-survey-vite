import React, { useState } from "react";

// Define email component
export const Email = ({ updateFormData, value }) => {
  // State variables
  const [email, setEmail] = useState(value);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showError, setShowError] = useState(false);

  // Handle changes in input field, validation etc
  const emailInput = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail); // Update state
    updateFormData("email", inputEmail);

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isValid = emailRegex.test(inputEmail);

    setIsValidEmail(isValid);
    setShowError(false);
  };

  const onBlur = () => {
    if (!isValidEmail) {
      setShowError(true);
    }
  };

  return (
    <div>
      <label>What is your email? 📨</label>
      <input
        type="email"
        value={email}
        onChange={emailInput}
        onBlur={onBlur}
        className={isValidEmail ? "" : "invalid-email"}
      />
      {showError && !isValidEmail && (
        <div className="error-message">⚠️ Invalid email format</div>
      )}
    </div>
  );
};
