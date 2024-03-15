/* eslint-disable react/prop-types */
import { adventuresArray } from "./Arrays";

export function Adventure({ value, onChange }) {
  return (
    <div>
      <h2 className="question">
        What&#39;s the pair&#39;s favourite adventure?
      </h2>
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
