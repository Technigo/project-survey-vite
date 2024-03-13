//--- Handles the placeholder visibility depending on if the input field is active or not ---//

import { useState } from "react";

export const HandleFocus = (initialPlaceholder) => {
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);

  // when the input field is active the placeholder disappear
  const handleFocus = () => {
    setPlaceholder("");
  };

  // if the input field is empty when focusing on another input, the placeholder will appear.
  const handleOnBlur = (value) => {
    if (value === "") {
      setPlaceholder(initialPlaceholder);
    }
  };

  return { placeholder, handleFocus, handleOnBlur };
};
