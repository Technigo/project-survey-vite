export const Color = ({ value, updateColor }) => {
  const handleFavoriteColorChange = (e) => updateColor(e.target.value);

  return (
    <div>
      <label>Favorite Color:</label>
      <section className="radioGroup">
        <label>
          <input
            type="radio"
            value="violet"
            checked={"violet" === value}
            onChange={handleFavoriteColorChange}
          />
          Violet
        </label>
        <label>
          <input
            type="radio"
            value="indigo"
            checked={"indigo" === value}
            onChange={handleFavoriteColorChange}
          />
          Indigo
        </label>
        <label>
          <input
            type="radio"
            value="blue"
            checked={"blue" === value}
            onChange={handleFavoriteColorChange}
          />
          Blue
        </label>
        <label>
          <input
            type="radio"
            value="green"
            checked={"green" === value}
            onChange={handleFavoriteColorChange}
          />
          Green
        </label>
        <label>
          <input
            type="radio"
            value="yellow"
            checked={"yellow" === value}
            onChange={handleFavoriteColorChange}
          />
          Yellow
        </label>
        <label>
          <input
            type="radio"
            value="orange"
            checked={"orange" === value}
            onChange={handleFavoriteColorChange}
          />
          Orange
        </label>
        <label>
          <input
            type="radio"
            value="red"
            checked={"red" === value}
            onChange={handleFavoriteColorChange}
          />
          Red
        </label>
      </section>
    </div>
  );
};
