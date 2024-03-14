import { useState } from 'react';
import { DropDown } from "./DropDown";
import { DropDown2 } from './DropDown2'; 
import { TextInput } from './TextInput';
import { RadioButtons } from './RadioButtons';
import "./SurveyForm.css";

export const SurveyForm = ({onSubmit}) => {
    // State to hold the selected values
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedDiscovery, setSelectedDiscovery] = useState('');
    const [formData, setFormData] = useState({});
  
    // Function to handle dropdown changes
    const handleGenreChange = (event) => {
      setSelectedGenre(event.target.value);
    };

    const handleDiscoveryChange = (event) => {
      setSelectedDiscovery(event.target.value);
    };

    const handleChange = (e) => {
      // handle form field changes
    };

    const handleSubmit=(event)=>{
      event.preventDefault();
      onSubmit(formData);
    }
  
    return (
      <form onSubmit={handleSubmit} className="survey-form">
        <h1>Music Survey</h1>
        <DropDown selectedValue={selectedGenre} handleDropdownChange={handleGenreChange} />
        <TextInput />
        <RadioButtons />
        <DropDown2 selectedValue={selectedDiscovery} handleDropdownChange={handleDiscoveryChange} />
        <button type="submit" className="button">Submit</button>
      </form>
    );
}

