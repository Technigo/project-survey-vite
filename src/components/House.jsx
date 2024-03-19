export const House = ({ houseName, onChange, house, index }) => {
  return (
    <div className="radio-button-wrapper">
      {index === 0 && (
        <div htmlFor="houselist">
          <h2>1.</h2>
          <p>Which Hogwarts house would you be in?</p>
        </div>
      )}
      <label className="radio-button-container">
        <input
          name="house"
          type="radio"
          value={house}
          onChange={onChange}
          checked={houseName === house}
          id="house"
          required
          aria-required="true"
        />
        <span
          className={`custom-radio ${houseName === house ? "checked" : ""}`}
        >
          {house}
        </span>
      </label>
    </div>
  );
};
