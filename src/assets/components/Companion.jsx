import { companionsArray } from "./Arrays.jsx";

// eslint-disable-next-line react/prop-types

export const Companion = ({ value, onChange }) => {


  return (
    <div className="CompanionComponent">
      <h2 className="question">Who is your main character`s companion?</h2>
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
};
