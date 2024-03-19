const Movie = ({ formData, updateFormData }) => (
  <>
    <p className="block mb-2 text-sm font-medium text-white">What movie do you want to see?</p>
    {["Hammarsköld", "Stockholm Bloodbath", "Mean Girls"].map((movie) => (
      <div key={movie} className="flex flex-col">
        <label className="text-white font-medium inline-flex items-center">
          <input
            type="radio"
            name="movie"
            value={movie}
            checked={formData.movie === movie}
            onChange={(e) => updateFormData('movie', e.target.value)}
            className="text-red-500 mr-3"
          />
          {movie}
        </label>
      </div>
    ))}
  </>
);

export default Movie;
