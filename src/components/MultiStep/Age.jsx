export const Age = ({ value, updateAge }) => {
  const handleAgeChange = (e) => updateAge(e.target.value);

  return (
    <div>
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={value}
        onChange={handleAgeChange}
        min={0}
        max={120}
      />
    </div>
  );
};
