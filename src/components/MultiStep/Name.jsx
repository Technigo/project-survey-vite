export const Name = ({ value, updateName }) => {
  const handleNameChange = (e) => updateName(e.target.value);

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={value} onChange={handleNameChange} />
    </div>
  );
};
