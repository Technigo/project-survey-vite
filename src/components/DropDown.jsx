import { useRef } from "react";
import "./DropDown.css";

export const DropDown = () => {
  // Create a ref to hold the dropdown element
  // Couldn't use this: export const DropDown = ({ selectedValue, handleDropdownChange }) => {
  const dropdownRef = useRef(null);

  // Function to handle dropdown change
  const handleDropdownChange = () => {
    const selectedValue = dropdownRef.current.value;
    // Do something with the selected value
    console.log("Selected value:", selectedValue);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="musicGenre" className="label">
        What is your favorite music genre?
      </label>
      <select
        ref={dropdownRef}
        id="musicGenre"
        name="musicGenre"
        className="dropdown"
        onChange={handleDropdownChange}
      >
        <option value="">Select an option</option>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
        <option value="Hip Hop/Rap">Hip Hop/Rap</option>
        <option value="Electronic/Dance">Electronic/Dance</option>
        <option value="Classical">Classical</option>
        <option value="Jazz">Jazz</option>
        <option value="Country">Country</option>
        <option value="R&B/Soul">R&B/Soul</option>
        <option value="Alternative/Indie">Alternative/Indie</option>
        <option value="Metal">Metal</option>
        <option value="Blues">Blues</option>
        <option value="Reggae">Reggae</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};
