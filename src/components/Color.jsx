import React from 'react';

export const Color = ({ color, setColor, onProceed }) => {
  const handleColor = (event) => {
    setColor(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onProceed();  // Notify the parent to move to the next step
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      what happened at yr nightmare
      <input 
        type="text" 
        required 
        value={color} 
        onChange={handleColor} 
      />
    </form>
  );
}
