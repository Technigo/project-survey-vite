import React, { useState } from "react";

export const Email = ({ updateFormData, value }) => {
  const [email, setEmail] = useState(value);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showError, setShowError] = useState(false);

  const emailInput = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
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
