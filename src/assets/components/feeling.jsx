export const Feeling = ({ value, updateFormData }) => {
  const FeelingInput = (e) => updateFormData("feeling", e.target.value);
  return (
    <div>
      <label>Describe your feeling right now:</label>
      <input type="text" value={value} onChange={FeelingInput} />
    </div>
  );
};
