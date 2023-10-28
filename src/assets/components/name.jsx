export const Name = ({ value, updateFormData }) => {
  const userName = (e) => updateFormData("name", e.target.value);
  return (
    <div>
      <label>What is your name?</label>
      <input type="text" value={value} onChange={userName}></input>
    </div>
  );
};
