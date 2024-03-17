import { companionsArray } from "./Arrays";

// eslint-disable-next-line react/prop-types
export const Companion = ({ value, onChange }) => {
  return (
    <div className="elementContainer">
      <label htmlFor="selectCompanion">
        <h2 className="question">
          Who is your main character&#39;s companion?
        </h2>
        <select
          name="selectCompanion"
          id="selectCompanion"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          tabIndex="0"
        >
          <option value="">Select companion</option>
          {companionsArray.map((companion, index) => (
            <option key={index} value={companion.name}>
              {companion.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
