import { useState } from "react";
import { HandleFocus } from "./HandleFocus.jsx";

export const EmailInput = () => {
  const [email, setEmail] = useState("");
  const { placeholder, handleFocus, handleOnBlur } = HandleFocus("Type your email");

  return (
    <label className="text-form-area">
      Email
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => setEmail(event.target.value)}
        onFocus={handleFocus}
        onBlur={() => handleOnBlur(email)}
        value={email}
      />
    </label>
  );
};
