import { useState } from 'react';
import { DropDown } from "./DropDown";
import { DropDown2 } from './DropDown2'; 
import { TextInput } from './TextInput';
import { RadioButtons } from './RadioButtons';
import "./SurveyForm.css";

export const SurveyForm = () => {
    // State to hold the selected values
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedDiscovery, setSelectedDiscovery] = useState('');
  
    // Function to handle dropdown changes
    const handleGenreChange = (event) => {
      setSelectedGenre(event.target.value);
    };

    const handleDiscoveryChange = (event) => {
      setSelectedDiscovery(event.target.value);
    };
  
    return (
      <div className="survey-form">
        <h1>Music Survey</h1>
        <DropDown selectedValue={selectedGenre} handleDropdownChange={handleGenreChange} />
        <TextInput />
        <RadioButtons />
        {/* Render the DropDown2 component */}
        <DropDown2 selectedValue={selectedDiscovery} handleDropdownChange={handleDiscoveryChange} />
        <button type="button" className="button">Submit</button>
      </div>
    );
}

