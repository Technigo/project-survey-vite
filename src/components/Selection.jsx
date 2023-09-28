const Selection = ({ name, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} name={name}>
      <option value="option0" disabled>
        Select an option
      </option>
      <option value="Chanterelle Mushroom">Chanterelle Mushrooms</option>
      <option value="Porcini Mushroom">Porcini Mushrooms</option>
      <option value="Black trumpet Mushroom">Black trumpet Mushrooms</option>
      <option value="Morel Mushroom">Morel Mushrooms</option>
    </select>
  );
};

export default Selection;
