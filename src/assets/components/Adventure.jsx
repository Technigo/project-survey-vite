
import { adventuresArray } from "./Arrays";

// eslint-disable-next-line react/prop-types
export function Adventure({ value, onChange }) {
  return (
    <div className="elementContainer">
      <label htmlFor="selectAdventure">
        <h2 className="question">
          What&#39;s the pair&#39;s favourite adventure?
        </h2>
      </label>
      <select
        name="selectAdventure"
        id="selectAdventure"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
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
