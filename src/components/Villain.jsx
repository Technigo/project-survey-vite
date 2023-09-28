export const Villain = ({ updateFormData, value }) => {
  const villainInput = (e) => {
    updateFormData("villain", e.target.value);
  };
  return (
    <div className="villain">
      <label>Type a villain name </label>
      <input type="text" value={value} onChange={villainInput} />
    </div>
  );
};
