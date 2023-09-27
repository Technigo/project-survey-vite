export const Hero = ({ updateFormData, value }) => {
  const heroInput = (e) => updateFormData("hero", e.target.value);
  return (
    <div>
      <label>Hero:</label>
      <input type="text" value={value} onChange={heroInput} />
    </div>
  );
};
