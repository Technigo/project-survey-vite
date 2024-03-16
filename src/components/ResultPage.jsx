import React from 'react';
import "./ResultPage.css";
import { SurveyForm } from "./SurveyForm";

export const ResultPage=({formData}) => {
  return (
    <div className='resultForm'>
      <h1 className='header'>Result</h1>
      <p> {formData.musicGenre} is your favorite music genre.</p>
      <p>{formData.musician} is your favorite musician/band.</p>
      <p>You prefer: {formData.musicPreference}</p>
      <p>You discover new music from {formData.musicDiscovery}.</p> 
      <p>Music is {formData.musicRange}/5 important to you in your life</p>
    </div>
  )
}

