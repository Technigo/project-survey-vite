import React from 'react';
import "./ResultPage.css";
import { SurveyForm } from "./SurveyForm";
import PropTypes from "prop-types";

export const ResultPage=({musician}) => {
  return (
    <div className='resultForm'>
      <h1 className='header'>Result</h1>
      <p> is your favorite music genre.</p>
      <p>is your favorite musician/band.</p>
      <p>You prefer:</p>
      <p>You discover new music by.</p> 
    </div>
  )
}

ResultPage.propTypes = {
  onStartSurvey: PropTypes.func.isRequired,
};
