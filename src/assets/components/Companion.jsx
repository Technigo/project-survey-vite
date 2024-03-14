import { companionsArray } from "./Arrays.jsx";

// eslint-disable-next-line react/prop-types
export function Companion({ value, onChange }) {
  return (
    <div className="CompanionComponent">
      <h2 className="number">3.</h2>
      <p className="question">Who is your main character`s companion?</p>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select companion</option>
        {companionsArray.map((companion, index) => (
          <option key={index} value={companion.name}>
            {companion.name}
          </option>
        ))}
      </select>
    </div>
  );
}
