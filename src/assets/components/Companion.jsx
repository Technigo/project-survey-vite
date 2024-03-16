import { companionsArray } from "./Arrays";

// eslint-disable-next-line react/prop-types
export const Companion = ({ value, onChange }) => {
  return (
    <div className="elementContainer">
      <label htmlFor="selectCompanion">
        <h2 className="question">
          Who is your main character&#39;s companion?
        </h2>
      </label>
      <select
        name="selectCompanion"
        id="selectCompanion"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        tabIndex="6"
      >
        <option value="">Select companion</option>
        {companionsArray.map((companion, index) => (
          <option key={index} value={companion.name} tabIndex={index + 7}>
            {companion.name}
          </option>
        ))}
      </select>
    </div>
  );
};
