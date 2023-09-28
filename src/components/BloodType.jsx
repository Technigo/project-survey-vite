// Frida //
import { useState } from "react";

export const BloodType = () => {
  const [bloodtype, setBloodtype] = useState("");

  return (
    <form>
      <select
        onChange={(event) => setBloodtype(event.target.value)}
        value={bloodtype}
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
