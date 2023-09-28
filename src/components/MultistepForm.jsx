import React, { useState } from "react";
import { Name } from "./nameInput";
import { Room } from "./Room";
import { AgeGroup } from "./Age";
import "./index.css";


export const MultistepForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        room: "",
        AgeGroup: "",
    })
    const updateFormData = (field, value) => {
        setFormData((previous) => ({ ...previous, [field]: value }))
    }
    // State to track the current step in the form
    const [currentStep, setCurrentStep] = useState(1);
    // Function to move to the next step in the form
    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };
    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };
    // function to submit the form itself
    const [formSubmitted, setFormSubmitted] = useState(false);

    const submitForm = () => {
        setFormSubmitted(true); // Mark the form as submitted
    };
    if (formSubmitted) {
        return (
            <div>
                <h2>Thank You!</h2>
                <p>
                    Hi {formData.name}! You stayed in room: {formData.room}, and gave us
                    the rating of {formData.ageGroup} star! As a thank you for sharing
                    your opinion, we would like to offer you 10% off on your next stay!
                </p>
            </div>

        );

    }
    return (
        <div>

            {currentStep === 1 && (
                <Name value={formData.name} updateFormData={updateFormData} />
            )}

            {currentStep === 2 && (
                <Room value={formData.room} updateFormData={updateFormData} />
            )}

            {currentStep === 3 && (
                <AgeGroup value={formData.ageGroup} updateFormData={updateFormData} />
            )}

            <div>

                {currentStep > 1 && <button onClick={prevStep}>Back</button>}
                {currentStep < 3 ? (
                    <button onClick={nextStep}>Next</button>
                ) : (
                    <button onClick={submitForm}>Submit Form</button>
                )}
            </div>
        </div>
    );
};


