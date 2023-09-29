import React, { useState } from "react";
export const Email = ({ updateFormData, value }) => {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const emailInput = (e) => {
    const email = e.target.value;
    updateFormData("email", email);

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isValid = emailRegex.test(email);

    setIsValidEmail(isValid);
  };

  return (
    <div>
      <label>What is your email? ✉️</label>
      <input
        type="email"
        value={value}
        onChange={emailInput}
        className={isValidEmail ? "" : "invalid-email"}
      />
      {!isValidEmail && <div className="error-message">⚠️ Invalid email format</div>}
    </div>
  );
};
