// Isaac
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";


const ageGroups = [
  "16-18",
  "18-25",
  "25-40",
];
export const Age = () => {
  const [ageGroup, setAgeGroup] = useState();

  console.log(Age);
  return (
    <form>
      Age Group:
      {ageGroups.map(group => (
        <label key={group}>
          <input
          type="radio"
          value={group}
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === group}
          />
          {group}
        </label>
      ))}
    </form>
  )
}