export const Villain = ({ updateFormData, value }) => {
  const villainInput = (e) => {
    updateFormData("villain", e.target.value);
  };
  return (
    <div>
      <label>Villain: </label>
      <input type="text" value={value} onChange={villainInput} />
    </div>
  );
};
