export const SpiritQuestion = ({ value, setValue }) => {
  const spirit = value;

  const spiritInput = (event) => setValue("spirit", event.target.value);

  return (
    <div className="spirit-question">
      <select onChange={spiritInput} value={spirit}>
        <option value="">Liquor of choice:</option>
        <option value="vodka">Vodka</option>
        <option value="gin">Gin</option>
        <option value="rum">Rum</option>
        <option value="whisky">Whisky</option>
      </select>
    </div>
  );
};
