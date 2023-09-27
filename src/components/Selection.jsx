import { useState } from "react";
const Selection = () => {
  const [selectedOption, setSelectedOption] = useState("option0");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      <option value="option0" disabled>
        Select an option
      </option>
      <option value="chanterelle">Chanterelle Mushrooms</option>
      <option value="porcini">Porcini Mushrooms</option>
      <option value="blacktrumpet">Black trumpet Mushrooms</option>
      <option value="morel">Morel Mushrooms</option>
    </select>
  );
};

export default Selection;
