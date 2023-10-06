import React from 'react'

import { useState } from "react";
import { Name } from "./Name.jsx"
import { Age } from "./Age.jsx"
import { Classroom } from "./Classroom.jsx"
import { FavDinosaur } from "./FavDinosaur.jsx"
import { FavFood } from "./FavFood.jsx"
import { ResultPage } from "./ResultPage.jsx"
import { Learning } from "./Learning.jsx"

//Function to create State to store form data
export const SurveyForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        classroom: "",
        favDinosaur: "",
        favFood: "",
        learning: "",
    });

    //useState Hook to make survery screen disappear and be replaced by results screen
    const [hideSurvey, setHideSurvey] = useState(false);

    // Function to update form data based on field and value
    const updateFormData = (field, value) => {
        setFormData((previous) => ({ ...previous, [field]: value }));
    };

    /// GOING BACK AND FORTH BETWEENQUESTIONS

    // State to track the current step in the form
    const [currentStep, setCurrentStep] = useState(1);

    // Function to move to the next step in the form
    const nextStep = () => {
        if (currentStep < 7) setCurrentStep(currentStep + 1);
    };
    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    console.log(`Hide Survey is: ${hideSurvey}`) //for debugging

    // function to submit the form itself
    const submitForm = () => {

        setHideSurvey(true);
        console.log(formData); //for debugging

        const formattedData = `
          Name: ${formData.name}
          Age: ${formData.age}
          Classroom: ${formData.classroom}
          Favorite Dinosaur: ${formData.favDinosaur}
          Favorite Food: ${formData.favFood}
          Learning: ${formData.learning}
        `;
    };

    if (hideSurvey === true) {
        return (
            <ResultPage formData={formData} />
        )
    }

    if (hideSurvey === false) {
        return (
            <>
                <p className="sml-header">Answering the following questions, and create a poster to share with your class</p>
                <div className="question-boxes">
                    {/* Render the Name component if on step 1 */}
                    {currentStep === 1 && (
                        <Name value={formData.name} updateFormData={updateFormData} />
                    )}
                    {/* Render the Age component if on step 2 */}
                    {currentStep === 2 && (
                        <Age value={formData.age} updateFormData={updateFormData} />
                    )}
                    {/* Render the Email component if on step 3 */}
                    {currentStep === 3 && (
                        <Classroom value={formData.classroom} updateFormData={updateFormData} />
                    )}
                    {/* Render the Band component if on step 4 */}
                    {currentStep === 4 && (
                        <FavDinosaur value={formData.favDinosaur} updateFormData={updateFormData} />
                    )}
                    {/* Render the Album component if on step 5 */}
                    {currentStep === 5 && (
                        <FavFood value={formData.favFood} updateFormData={updateFormData} />
                    )}
                    {/* Render the Album component if on step 6 - stretch goal */}
                    {currentStep === 6 && (
                        <Learning value={formData.learning} updateFormData={updateFormData} />
                    )}
                    <div>
                        {/* Show the "Back" button if not on the first step */}
                        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
                        {currentStep < 7 ? (
                            <button onClick={nextStep}>Next</button>
                        ) : (
                            <button onClick={submitForm}>Submit Form</button>
                        )}
                    </div>
                </div>
            </>
        );
    };
};