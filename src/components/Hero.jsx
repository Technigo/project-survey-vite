export const Hero = ({ updateFormData, value }) => {
  const heroInput = (e) => updateFormData("hero", e.target.value);
  return (
    <div className="hero">
      <label>Enter name of the hero</label>
      <input type="text" value={value} onChange={heroInput} required />
    </div>
  );
};
