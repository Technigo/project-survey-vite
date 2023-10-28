export const SecondFavorite = ({ value, updateFormData }) => {
  const SecondFavoriteInput = (e) =>
    updateFormData("secondFavorite", e.target.value);

  return (
    <div>
      <label>What is your second favorite thing in life?</label>
      <input type="text" value={value} onChange={SecondFavoriteInput} />
    </div>
  );
};
