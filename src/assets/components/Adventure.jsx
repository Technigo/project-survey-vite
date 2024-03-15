/* eslint-disable react/prop-types */
import { adventuresArray } from "./Arrays";

export function Adventure({ value, onChange }) {
  return (
    <div className="AdventureComponent">
      <h2 className="question">What`s the pair`s favourite adventure?</h2>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select adventure</option>
        {adventuresArray.map((adventureItem, index) => (
          <option key={index} value={adventureItem.name}>
            {adventureItem.name}
          </option>
        ))}
      </select>
    </div>
  );
}
