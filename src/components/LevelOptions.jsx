import { useState } from "react";

export const LevelOptions = () => {
  const [level, setLevel] = useState("");

  return (
    <>
      <label className="form-area select-style">
        Which level were the course at:
        <select onChange={(event) => setLevel(event.target.value)}>
          <option required value={level}>
            Beginner
          </option>
          <option required value={level}>
            Intermedier
          </option>
          <option required value={level}>
            Advanced
          </option>
        </select>
      </label>
    </>
  );
};
