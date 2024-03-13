import { useState } from "react";

export const LevelOptions = () => {
  const [level, setLevel] = useState("");

  return (
    <select onChange={(event) => setLevel(event.target.value)}>
      <option value={level}>Beginner</option>
      <option value={level}>Intermedier</option>
      <option value={level}>Advanced</option>
    </select>
  );
};
