import React, { useState } from "react";
import { Name } from "./nameInput";
import { Room } from "./Room";
import { Star } from "./starts";
import { StayDay } from "./stayDay";
import { Activity } from "./activities";
import { Comment } from "./comments";
import "./index.css";



export const MultistepForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        room: "",
        StayDay: "",
        Activity: "",
        Star: "",
        Comment: "",


    })
    const updateFormData = (field, value) => {
        setFormData((previous) => ({ ...previous, [field]: value }))
    }
    // State to track the current step in the form
    const [currentStep, setCurrentStep] = useState(1);
    // Function to move to the next step in the form
    const nextStep = () => {
        if (currentStep < 6) setCurrentStep(currentStep + 1);
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
                <h2>Thank you {formData.name}!</h2>
                <p>
                    Hi {formData.name}, <br /> you stayed in our {formData.room}, for a period of {formData.stayDay}. You took part in {formData.activity} activity, and gave us
                    the rating of {formData.star}! <br />
                    You left the following comment: {formData.comment}
                    <br /><br />
                    As a thank you for helping us improve our service, we would like to offer you 10% off on your next stay! <br /> Use the code 'SUNNYVACAY'
                    <br /><br />
                    Hope to see you soon again!
                </p>
            </div>

        );

    } else {
        return (
            <div>
                <h2>We at The Sun Hotel would like to know what you think about your stay!</h2>
                <h2> Please share your opinion with us.</h2>

                {currentStep === 1 && (
                    <Name value={formData.name} updateFormData={updateFormData} />
                )}

                {currentStep === 2 && (
                    <Room value={formData.room} updateFormData={updateFormData} />
                )}
                {currentStep === 3 && (
                    <StayDay value={formData.stayDay} updateFormData={updateFormData} />
                )}
                {currentStep === 4 && (
                    <Activity value={formData.activity} updateFormData={updateFormData} />
                )}

                {currentStep === 5 && (
                    <Star value={formData.star} updateFormData={updateFormData} />
                )}
                {currentStep === 6 && (
                    <Comment value={formData.comment} updateFormData={updateFormData} />
                )}

                <div>
                    {currentStep > 1 && <button onClick={prevStep}>Back</button>}
                    {currentStep < 6 ? (
                        <button onClick={nextStep}>Next</button>
                    ) : (
                        <button onClick={submitForm}>Submit Form</button>
                    )}
                </div>
            </div>
        );
    };




}
