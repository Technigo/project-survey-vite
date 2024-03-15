
// eslint-disable-next-line react/prop-types
export function Charactername({ value, onChange }) {

  return (
    <div className="NameComponent">
      <h2 className="number">1.</h2>
      <p className="question">What is your character`s name?</p>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="Charactername"
      />
    </div>
  );
}
