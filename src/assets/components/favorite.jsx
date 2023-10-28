export const Favorite = ({ value, updateFormData }) => {
  const FavoriteInput = (e) => updateFormData("favorite", e.target.value);

  return (
    <div>
      <label>What is your favorite thing to do?</label>
      <input tytpe="text" value={value} onChange={FavoriteInput} />
    </div>
  );
};
