import { useState } from 'react';
import { DropDown } from "./DropDown";
import { TextInput } from './TextInput';
import { RadioButtons } from './RadioButtons';
import "./SurveyForm.css";

export const SurveyForm = () => {
    // State to hold the selected value
    const [selectedValue, setSelectedValue] = useState('');
  
    // Function to handle dropdown change
    const handleDropdownChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    return (
      <div className="survey-form">
        <h1>Music Survey</h1>
        <DropDown selectedValue={selectedValue} handleDropdownChange={handleDropdownChange} />
        <TextInput />
        <RadioButtons /> 
        <button type="button" className="button">Submit</button>
      </div>
    );
  };
