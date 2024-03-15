import { useState } from 'react';
import { DropDown } from "./DropDown";
import { DropDown2 } from './DropDown2'; 
import { TextInput } from './TextInput';
import { RadioButtons } from './RadioButtons';
import "./SurveyForm.css";

export const SurveyForm = ({setFormData, showResult}) => {
    // State to hold the selected values
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedMusician, setSelectedMusician] = useState('');
    const [selectedMusicPreference, setSelectedMusicPreference] = useState('');
    const [selectedDiscovery, setSelectedDiscovery] = useState('');
  
    // Function to handle dropdown changes
    const handleGenreChange = (event) => {
      setSelectedGenre(event.target.value);
    };

    const handleMusicianChange = (event) => {
      setSelectedMusicPreference(event.target.value);
    };

    const handlePreferenceChange = (event) => {
      setSelectedMusician(event.target.value);
    };

    const handleDiscoveryChange = (event) => {
      setSelectedDiscovery(event.target.value);
    };

    const handleChange = (e) => {
      // handle form field changes
    };


    const handleSubmit=(event)=>{
      event.preventDefault();
      const formData = {
        musicGenre: selectedGenre,
        musician: selectedMusician,
        musicPreference: selectedMusicPreference,
        musicDiscovery: selectedDiscovery
      };

      showResult()
      setFormData(formData);
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

