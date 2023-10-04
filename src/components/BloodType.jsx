// Frida //
// import { useState } from "react";

export const BloodType = ({ value, updateFormData }) => {
  const userBloodType = (e) => updateFormData("bloodType", e.target.value);

  return (
    <form>
      <label htmlFor="bloodType">Select Bloodtype</label>
      <select
        className="bloodtype"
        id="bloodType"
        name="bloodType"
        value={value}
        onChange={userBloodType}
      >
        <option value="">Select Bloodtype</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="O-">O-</option>
        <option value="O+">O+</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="B-">B-</option>
        <option value="B+">B+</option>
      </select>
    </form>
  );
};
