import { useState } from "react";
import { AdjectiveTown } from "./components/AdjectiveTown";
import { JourneyMood } from "./components/JourneyMood";
import { MainCharacterName } from "./components/MainCharacterName";
import { PumpkinAdjective } from "./components/PumpkinAdjective";
import { PumpkinPatchCharacter } from "./components/PumpkinPatchCharacter";
import { Wish } from "./components/Wish";
import { CreateStoryBoard } from "./components/CreateStoryBoard";


export const StoryBoard = () => {

    const [formData, setFormData] = useState({
        name: "",
        townAdjective: "",
        journeyMood: "",
        pumpkinAdjective: "",
        pumpkinPatchCharacter: "",
        wishChoice: ""
    });

    // Function to update the form data based on the input field and value
    const updateFormData = (field, value) => {
        setFormData((previous) => ({ ...previous, [field]: value }));
    }
    // ... spread operator (used to create a new object that contains all the properties of previous object without directly mutating the state but instead creating a new copy of it)

    // State to track the current step in the form
    const [currentStep, setCurrentStep] = useState(1);
    // Function to move to the next step in the form
    const nextStep = () => {
        if (currentStep < 7) setCurrentStep(currentStep + 1);
    };
    // Function to move back to the previous step
    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };


    return (
        <div>
            {/* Render the Name component if on step 1 */}
            {currentStep === 1 && (
                <MainCharacterName value={formData.name} updateFormData={updateFormData} />
            )}
            {/* Render the town description component if on step 2 */}
            {currentStep === 2 && (
                <AdjectiveTown value={formData.townAdjective} updateFormData={updateFormData} />
            )}
            {/* Render the journey mood component if on step 3 */}
            {currentStep === 3 && (
                <JourneyMood value={formData.journeyMood} updateFormData={updateFormData} />
            )}
            {/* Render the pumpkin description component if on step 4 */}
            {currentStep === 4 && (
                <PumpkinAdjective value={formData.pumpkinAdjective} updateFormData={updateFormData} />
            )}
            {/* Render the pumpkin patch new character component if on step 5 */}
            {currentStep === 5 && (
                <PumpkinPatchCharacter value={formData.pumpkinPatchCharacter} updateFormData={updateFormData} />
            )}
            {/* Render the wish component if on step 6 */}
            {currentStep === 6 && (
                <Wish value={formData.wishChoice} updateFormData={updateFormData} />
            )}

            {/* Render the story board with all user's input */}
            {currentStep === 7 && (
                <CreateStoryBoard formData={formData} />
            )}
            <div>
                {/* Show the "Back" button if not on the first step */}
                {(currentStep > 1 && currentStep <= 6) && <button onClick={prevStep}>Back</button>}
                {/* Show Next button up to 5th step */}
                {currentStep < 6 && <button onClick={nextStep}>Next</button>}
                {/* Change button msg on 6th and last form input */}
                {currentStep === 6 && <button onClick={nextStep}>Unravel your tale</button>}
                {/* Reload whole story-telling app */}
                {currentStep === 7 && <button className="reload-btn" type="submit" onClick={() => window.location.reload()}>Weave a brand new tale</button>}
            </div>
        </div>
    );
};




