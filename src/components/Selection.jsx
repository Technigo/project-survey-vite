const Selection = ({ value, setFormValue }) => {
  const handleSelectChange = (event) => {
    setFormValue("favoriteMushroom", event.target.value);
  };

  return (
    <select value={value} onChange={handleSelectChange}>
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
