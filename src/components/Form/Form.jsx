import { useState } from "react";
import { NameInput } from "./NameInput/NameInput.jsx";
import { SeasonRadio } from "./SeasonRadio/SeasonRadio.jsx"
import { ActivitySelect } from "./ActivitySelect/ActivitySelect.jsx";
import { EcoCheck } from "./EcoCheck/EcoCheck.jsx";
import { ButtonSubmit } from "./Buttons/ButtonSubmit/ButtonSubmit.jsx"

import "./Form.css"

export const Form  = () => {

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    favoriteBand: "",
    favoriteAlbum: "",
    favoriteArtist: "",
  });

  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const submitForm = () => {
    console.log(formData);
    const formattedData = `
    Name: ${formData.name}
    Age: ${formData.age}
    Email: ${formData.email}
    Favorite Band: ${formData.favoriteBand}
    Favorite Album: ${formData.favoriteAlbum}
    Favorite Artist: ${formData.favoriteArtist}
  `;
    alert(formattedData);
  };



    return (
      <div>
      {/* Render the Name component if on step 1 */}
      {currentStep === 1 && (
        <NameInput value={formData.name} updateFormData={updateFormData} />
      )}
      {/* Render the Age component if on step 2 */}
      {currentStep === 2 && (
        <Age value={formData.age} updateFormData={updateFormData} />
      )}
      {/* Render the Email component if on step 3 */}
      {currentStep === 3 && (
        <Email value={formData.email} updateFormData={updateFormData} />
      )}
      {/* Render the Band component if on step 4 */}
      {currentStep === 4 && (
        <Band value={formData.favoriteBand} updateFormData={updateFormData} />
      )}
      {/* Render the Album component if on step 5 */}
      {currentStep === 5 && (
        <Album value={formData.favoriteAlbum} updateFormData={updateFormData} />
      )}
      {/* Render the Artist component if on step 6 */}
      {currentStep === 6 && (
        <Artist
          value={formData.favoriteArtist}
          updateFormData={updateFormData}
        />
      )}
      <div>
        {/* Show the "Back" button if not on the first step */}
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {currentStep < 6 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={submitForm}>Submit Form</button>
        )}
      </div>
    </div>
  );
}