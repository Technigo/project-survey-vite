import React from "react";

const Name = ({ formData, updateFormData, validateStep }) => {
  return (
    <div className="form-step">
      <h2>Step 1: Your Name</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => updateFormData("name", e.target.value)}
      />
      <button onClick={nextStep} disabled={!validateStep(1)}>
        Next
      </button>
    </div>
  );
};

export default Name;
