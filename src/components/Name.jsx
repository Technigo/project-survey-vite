export const Name = ({ value, updateFormData }) => {
  const userName = (e) => updateFormData("name", e.target.value);
  return (
    <div className="name">
      <h1>Get Ready to Blast Off: Mars Adventure Awaits!</h1>
      <h2>Lets get started with your name</h2>
      <label></label>
      <input type="text" value={value} onChange={userName} />
    </div>
  );
};
