import { useState } from "react";
import { AdjectiveTown } from "./components/AdjectiveTown";
import { JourneyMood } from "./components/JourneyMood";
import { MainCharacterName } from "./components/MainCharacterName";
import { PumpkinAdjective } from "./components/PumpkinAdjective";
import { PumpkinPatchCharacter } from "./components/PumpkinPatchCharacter";
import { Wish } from "./components/Wish";


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
        if (currentStep < 6) setCurrentStep(currentStep + 1);
    };
    // Function to move back to the previous step
    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    // function to submit the form itself
    const createStoryBoard = () => {
        console.log(formData);
        const storyData =
            <container className="story-page">
                <h1>"{formData.name} and the Enchanted Pumpkin Patch"</h1>

                <p>In a {formData.townAdjective} town nestled among autumn hills, a fluffy cat named {formData.name} had a taste for adventure. Fall arrived, and with it came tales of the Enchanted Pumpkin Patch, whispered secrets among the elder cats.</p>

                <p>One moonlit night, {formData.name} set out to find it. Guided by the full moon, the cat wandered through rustling leaves and {formData.journeyMood}. Eventually, it stumbled upon a clearing bathed in moonlight, filled with enormous, {formData.pumpkinAdjective} pumpkins.</p>

                <p>{formData.name} touched the largest pumpkin, and it transformed into {formData.pumpkinPatchCharacter}. "I can grant one wish," it said. {formData.name} wished for {formData.wish} and laughter for the town's cats. {formData.pumpkinPatchCharacter} granted {formData.name}'s wish, and the patch came alive with happiness.</p>

                <p>Cats from all around visited, and content purring filled the air. Watching from home, {formData.name} realized the essence of fall's magic—bringing joy to others. The Enchanted Pumpkin Patch became a cherished tradition, a tale told for generations from cat to kitten.</p>
            </container>
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
            <div>
                {/* Show the "Back" button if not on the first step */}
                {currentStep > 1 && <button onClick={prevStep}>Back</button>}
                {currentStep < 6 ? (
                    <button onClick={nextStep}>Next</button>
                ) : (
                    <button onClick={createStoryBoard}>Unravel your story</button>
                )}
            </div>
        </div>
    );
};




