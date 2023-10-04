export const Movie = ({ updateFormData, value }) => {
  const movie = (e) =>
    updateFormData("movie", e.target.value);

  return (
    <div className="movie-container">
      <label className="movie-label">Which is the best movie ever made? 🎬</label>
      <select className="movie-select" value={value} onChange={movie}>
        <option>Select a movie</option>
        <option value="The Garbage Pail Kids Movie">The Garbage Pail Kids Movie (1987)</option>
        <option value="Vampires Suck">Vampires Suck (2010)</option>
        <option value="Superbabies: Baby Geniuses 2">Superbabies: Baby Geniuses 2 (2004)</option>
        <option value="Battlefield Earth">Battlefield Earth (2000)</option>
        <option value="Zoolander 2">Zoolander 2 (2016)</option>
      </select>
    </div>
  );
};
