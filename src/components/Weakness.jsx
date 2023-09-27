export const Weakness = ({ updateFormData, value }) => {
  const weaknessInput = (e) => {
    updateFormData("weakness", e.target.value);
  };
  return (
    <div>
      <input type="radio" value={value} checked={weaknessInput} />
      <label>Fire </label>
      <input type="radio" value={value} checked={weaknessInput} />
      <label>Frail body </label>
      <input type="radio" value={value} checked={weaknessInput} />
      <label>Blindness </label>
    </div>
  );
};
