import { useState } from "react";
import { HandleFocus } from "./HandleFocus.jsx";

export const TextInput = () => {
  const [text, setText] = useState("");

  const { placeholder, handleFocus, handleOnBlur } = HandleFocus(
    "Please, share what was good, fun or what we could have done better .."
  );

  return (
    <label className="text-form-area form-area">
      Share your thoughts of the course:
      <textarea
        rows="10"
        placeholder={placeholder}
        onChange={(event) => setText(event.target.value)}
        onFocus={handleFocus}
        onBlur={() => handleOnBlur(text)}
        value={text}
        required
      />
    </label>
  );
};
