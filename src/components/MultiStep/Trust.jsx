export const Trust = ({ updateFormData, value }) => {
  const trust = (e) => updateFormData("trust", e.target.value);

  return (
    <div className="slider-container">
      <label className="label">How much trust do you have in the government? 🗳️</label>
      <input
        type="range"
        className="slider"
        min="0"
        max="100"
        value={value}
        onChange={trust}
      />
      <span>{value}%</span>
    </div>
  );
};
