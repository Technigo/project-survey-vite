import { useState } from "react";

export const NameInput = () => {
  const [name, setName] = useState("");
  const [placeholder, setPlaceholder] = useState("Type your full name");

  // when the input field is active the placeholder disappear
  const handleFocus = () => {
    setPlaceholder("");
  };

  // if the input field is empty when focusing on another input, the placeholder will appear.
  const handleOnBlur = () => {
    if (name === "") {
      setPlaceholder("Type your full name");
    }
  };

  return (
    <label className="text-form-area">
      Full name
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => setName(event.target.value)}
        onFocus={handleFocus}
        onBlur={handleOnBlur}
        value={name}
      />
    </label>
  );
};
