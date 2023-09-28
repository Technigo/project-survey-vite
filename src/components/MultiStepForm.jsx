import { useState } from "react"
import { Age } from "./Age"
import { Album } from "./Album"
import { Artist } from "./Artist"
import { Band } from "./Band"
import { Email } from "./Email"
import { Name } from "./Name"

export const MultiStepForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        favoriteBand: "",
        favoriteAlbum: "",
        favoriteArtist: "",
    });

    const updateFormData = (field, value) => {
        setFormData((previous) => ({...previous, [field]: value}))
    };
    const [currentStep, setCurrentStep] = useState(1);
    const nextStep = () => {
        if(currentStep < 6) setCurrentStep(currentStep + 1);
    };
    const previousStep = () => {
        if(currentStep > 1) setCurrentStep(currentStep - 1);
    };

    

  return <div>MultiStepForm</div>;
};
