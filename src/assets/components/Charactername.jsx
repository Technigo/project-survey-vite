// eslint-disable-next-line react/prop-types
export function Charactername({ value, onChange }) {
  return (
    <div className="elementContainer">
      <label>
        <h2 className="question">What is your character&#39;s name?</h2>
        <input
          aria-describedby="characterName"
          name="characterName"
          id="characterName"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          // className="Charactername"
        />
      </label>
    </div>
  );
}
