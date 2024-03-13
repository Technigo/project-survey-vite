import { useRef } from "react";
import "./TextInput.css";

export const TextInput = () => {
  // Create a ref to hold the input element
  const inputRef = useRef(null);

  // Function to handle input change
  const handleInputChange = () => {
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
        defaultValue="Enter your answer here" // Set a default value
        onChange={handleInputChange} // Call the handleInputChange function on input change
        className="input-field"
      />
    </div>
  );
};
