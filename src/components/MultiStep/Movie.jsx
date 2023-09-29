import React from 'react';

export const Movie = ({ updateFormData, value }) => {
  const movie = (e) =>
    updateFormData("movie", e.target.value);

  return (
    <div className="movie-container">
      <label className="movie-label">Which is the best movie ever? 🎬</label>
      <select className="movie-select" value={value} onChange={movie}>
        <option>Select a movie</option>
        <option value="the-garbage-pail-kids-movie">The Garbage Pail Kids Movie (1987)</option>
        <option value="vampires-suck">Vampires Suck (2010)</option>
        <option value="superbabies-baby-geniuses-2">Superbabies: Baby Geniuses 2 (2004)</option>
        <option value="battlefield-earth">Battlefield Earth (2000)</option>
        <option value="zoolander-2">Zoolander 2 (2016)</option>
      </select>
    </div>
  );
};
