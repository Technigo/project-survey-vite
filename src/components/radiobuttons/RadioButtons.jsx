import "./RadioButtons.css";

const options = [
  {
    value: "live",
    label:
      "Live concerts: I love the energy and atmosphere of live performances.",
  },
  {
    value: "home",
    label:
      "Listening at home: I prefer the comfort and convenience of enjoying music in my own space.",
  },
  {
    value: "both",
    label:
      "Both: I enjoy the best of both worlds, depending on my mood and the occasion.",
  },
];

export const RadioButtons = ({ handleChange }) => {
  return (
    <div className="radio-buttons-container">
      <form className="label">
        <span className="number">3.</span>
        <span className="question">
          Do you prefer attending live concerts or listening to music at home?
        </span>
      </form>

      <div className="mapContainer">
        {options.map((option) => (
          <div key={option.value} className="radio-container">
            <input
              type="radio"
              id={option.value}
              name="musicPreference"
              value={option.label}
              onChange={handleChange}
              className="radio-input"
            />
            <label htmlFor={option.value} className="radio-label">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
