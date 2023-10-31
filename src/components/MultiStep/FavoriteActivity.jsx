export const FavoriteActivity = ({ value, updateActivity }) => {
  const handleActivityChange = (e) => updateActivity(e.target.value);

  return (
    <div>
      <label htmlFor="favoriteActivity">Favourite Activity:</label>
      <input
        type="text"
        id="favoriteActivity"
        value={value}
        onChange={handleActivityChange}
      />
    </div>
  );
};
