export const Season = ({ value, updateSeason }) => {
  const handleFavoriteSeasonChange = (e) => updateSeason(e.target.value);

  return (
    <div>
      <label htmlFor="favoriteSeason">Favorite Season:</label>
      <select
        id="favoriteSeason"
        value={value}
        onChange={handleFavoriteSeasonChange}
      >
        <option value="">Select a Season</option>
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="fall">Fall</option>
        <option value="winter">Winter</option>
      </select>
    </div>
  );
};
