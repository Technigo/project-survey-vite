export const Villain = ({ updateFormData, value }) => {
  const villainInput = (e) => {
    updateFormData("villain", e.target.value);
  };

  return (
    <div className="villain">
      <label>Enter the name of the villain </label>
      <input type="text" value={value} onChange={villainInput} />
    </div>
  );
};
