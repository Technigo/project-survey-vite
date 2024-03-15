// eslint-disable-next-line react/prop-types
export function Charactername({ value, onChange }) {
  return (
    <div className="NameComponent">
      <h2 className="question">What is your character`s name?</h2>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="Charactername"
      />
    </div>
  );
}
