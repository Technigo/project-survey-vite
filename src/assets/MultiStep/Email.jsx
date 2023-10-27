export const Email = ({ value, updateEmail }) => {
  const handleEmailChange = (e) => updateEmail(e.target.value);

  return (
    <div>
      <label>Email:</label>
      <input type="email" value={value} onChange={handleEmailChange} />
    </div>
  );
};
