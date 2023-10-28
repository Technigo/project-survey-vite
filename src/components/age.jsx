export const Age = ({ updateFormData, value }) => {
  const ageInput = (e) => updateFormData("age", e.target.value);

  return (
    <div>
      <label>What is your age?</label>
      <input type="number" value={value} onChange={ageInput} />
    </div>
  );
};
