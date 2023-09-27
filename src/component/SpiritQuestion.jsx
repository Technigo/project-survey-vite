export const SpiritQuestion = ({ value, setValue }) => {
  const spirit = value;

  const spiritInput = (event) => setValue("spirit", event.target.value);

  return (
    <div className="spirit-question">
      <select onChange={spiritInput} value={spirit}>
        <option value="">Which liquor do you want to use?</option>
        <option value="Vodka">Vodka</option>
        <option value="Gin">Gin</option>
        <option value="Rum">Rum</option>
        <option value="Whisky">Whisky</option>
      </select>
    </div>
  );
};
