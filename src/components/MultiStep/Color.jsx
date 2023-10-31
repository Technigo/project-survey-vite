export const Color = ({ value, updateColor }) => {
  const handleFavoriteColorChange = (e) => updateColor(e.target.value);

  return (
    <div>
      <label htmlFor="color">Favorite Color:</label>
      <section id="color" className="radioGroup">
        <label htmlFor="violet" style={{ color: "violet" }}>
          <input
            type="radio"
            id="violet"
            value="violet"
            checked={"violet" === value}
            onChange={handleFavoriteColorChange}
          />
          Violet
        </label>
        <label htmlFor="indigo" style={{ color: "indigo" }}>
          <input
            type="radio"
            id="indigo"
            value="indigo"
            checked={"indigo" === value}
            onChange={handleFavoriteColorChange}
          />
          Indigo
        </label>
        <label htmlFor="blue" style={{ color: "blue" }}>
          <input
            type="radio"
            id="blue"
            value="blue"
            checked={"blue" === value}
            onChange={handleFavoriteColorChange}
          />
          Blue
        </label>
        <label htmlFor="green" style={{ color: "green" }}>
          <input
            type="radio"
            id="green"
            value="green"
            checked={"green" === value}
            onChange={handleFavoriteColorChange}
          />
          Green
        </label>
        <label htmlFor="yellow" style={{ color: "yellow" }}>
          <input
            type="radio"
            id="yellow"
            value="yellow"
            checked={"yellow" === value}
            onChange={handleFavoriteColorChange}
          />
          Yellow
        </label>
        <label htmlFor="orange" style={{ color: "orange" }}>
          <input
            type="radio"
            id="orange"
            value="orange"
            checked={"orange" === value}
            onChange={handleFavoriteColorChange}
          />
          Orange
        </label>
        <label htmlFor="red" style={{ color: "red" }}>
          <input
            type="radio"
            id="red"
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
