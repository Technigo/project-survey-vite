import { useState } from "react";
import "./TextInput.css";

export const TextInput = ({value, handleChange}) => {

  const [musician, setMusician]= useState(value);

  const onChange = (event) => {
    setMusician(event.target.value);
    handleChange(event);
  };

  return (
    <div className="text-input-container">
      <label htmlFor="favoriteMusician" className="label">
        <span className="number">2.</span>
        <span className="question">Who is your favorite musician/band?</span>
      </label>
      <div className="inputOnRight">
        <input
          type="text"
          onChange={onChange}
          value={musician}
          name={musician}
          placeholder="Enter your answer here" 
          className="input-field"
        />
      </div>
    </div>
    
  );
};

