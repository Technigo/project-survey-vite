import { useRef } from "react";
import "./TextInput.css";

export const TextInput = () => {
  // Create a ref to hold the input element
  const inputRef = useRef(null);

  // Function to handle input blur
  const handleInputBlur = () => {
    const enteredValue = inputRef.current.value;
    // Do something with the entered value
    console.log("Entered value:", enteredValue);
  };

  return (
    <div className="text-input-container">
      <label htmlFor="favoriteMusician" className="label">
        Who is your favorite musician/band?
      </label>
      <input
        ref={inputRef} // Attach the ref to the input element
        type="text"
        id="favoriteMusician"
        name="favoriteMusician"
        placeholder="Enter your answer here" // Use placeholder instead of defaultValue
        onBlur={handleInputBlur} // Call the handleInputBlur function on input blur
        className="input-field"
      />
    </div>
  );
};
