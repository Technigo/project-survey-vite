// eslint-disable-next-line react/prop-types
export function Charactername({ value, onChange }) {
  return (
    <div className="elementContainer">
      <label htmlFor="characterName">
        <h2 className="question">What is your character&#39;s name?</h2>
        <input
          aria-describedby="characterName"
          tabIndex="0"
          name="characterName"
          id="characterName"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter a character name"
        />
      </label>
    </div>
  );
}
