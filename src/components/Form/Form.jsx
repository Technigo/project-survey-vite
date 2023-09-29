// Import necessary dependencies and components
import { useState } from "react";
import { NameInput } from "./NameInput/NameInput.jsx";
import { SeasonRadio } from "./SeasonRadio/SeasonRadio.jsx";
import { ActivitySelect } from "./ActivitySelect/ActivitySelect.jsx";
import { EcoCheck } from "./EcoCheck/EcoCheck.jsx";
import { FormMatch } from "./FormMatch/FormMatch.jsx";

import "./Form.css";

// Define the Form component
export const Form = () => {
    // Initialize the form data using the useState hook
    const [formData, setFormData] = useState({
        name: "",
        season: "",
        activity: "default",
        eco: "checked",
    });

    // Function to update form data when a field is changed
    const updateFormData = (field, value) => {
        setFormData((previous) => ({ ...previous, [field]: value }));
    };

    // Initialize the current step of the form
    const [currentStep, setCurrentStep] = useState(1);

    // Function to move to the next step
    const nextStep = () => {
        if (currentStep < 4) setCurrentStep(currentStep + 1);
    };
    // Function to move to the previous step
    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    // Function to submit the form
    const submitForm = (matchingDestination) => {

        if (matchingDestination) {
          // If there's a matching destination, move to the next step
            setCurrentStep(currentStep + 1);
        } else {
            // If there's no matching destination, show an alert message
            alert("No matching destination found. Please try again.");
        }
    };

    // Render the form components based on the current step
    return (
        <div className="form-wrapper">
            {/* Render the Name component if on step 1 */}
            {currentStep === 1 && (
                <NameInput
                    value={formData.name}
                    updateFormData={updateFormData}
                />
            )}
            {/* Render the Season component if on step 2 */}
            {currentStep === 2 && (
                <SeasonRadio
                    value={formData.season}
                    updateFormData={updateFormData}
                />
            )}
            {/* Render the Activity component if on step 3 */}
            {currentStep === 3 && (
                <ActivitySelect
                    value={formData.activity}
                    updateFormData={updateFormData}
                />
            )}
            {/* Render the Eco component if on step 4 */}
            {currentStep === 4 && (
                <EcoCheck
                    value={formData.eco}
                    updateFormData={updateFormData}
                />
            )}
            {/* Render the FormMatch component if on step 5 */}
            {currentStep >= 5 && (
                <FormMatch
                    name={formData.name}
                    season={formData.season}
                    activity={formData.activity}
                    eco={formData.eco}
                />
            )}
            <div className="button-container">
                {/* Show the "Back" button if not on the first step */}
                {currentStep > 1 && currentStep !== 5 && (
                    <div className="button-back">
                        <p>Click this button if you</p>
                        <p>changed your mind:</p>
                        <button onClick={prevStep}>Go back!</button>
                    </div>
                )}
                {/* Show the "Continue" button if not on the last step */}
                {currentStep < 4 && currentStep !== 5 && (
                    <div className="button-continue">
                        <p>Click this button to continue</p>
                        <p>to the next question:</p>
                        <button onClick={nextStep}>Continue</button>
                    </div>
                )}
                {/* Show the "Submit" button if on the last step */}
                {currentStep === 4 && (
                    <div className="button-submit">
                        <p>If you&apos;re happy with your</p>
                        <p>choices, please click Submit!</p>
                        <button onClick={submitForm}>Submit!</button>
                    </div>
                )}
            </div>
        </div>
    );
}