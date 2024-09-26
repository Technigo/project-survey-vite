import { useState } from "react";
import { Button } from "../Button/Button";
import { Footer } from "../Footer/Footer";
import { Hero } from "../Hero/Hero";
import { HowOften } from "../HowOften/HowOften";
import { PrimaryReason } from "../PrimaryReason/PrimaryReason";
import { Suggestions } from "../Suggestions/Suggestions";
import { Summary } from "../Summary/Summary";

import style from "./MultiStepForm.module.css";
import { Thankyou } from "../Thankyou/Thankyou";

export const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    primaryReason: "",
    howOften: "",
    suggestions: "",
  });

  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
    console.log(formData);
  };

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep((c) => c + 1);
    console.log(currentStep);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((c) => c - 1);
    console.log(currentStep);
  };

  return (
    <div className={style.form_wrapper}>

      {/*Mikael edited this to get hero to work*/}
      <Hero step={currentStep} /> {/* Pass currentStep as a prop to Hero <Hero /> */}

      <div className={style.form}>
        <h1>Pala PetFoods Customer Insights</h1>

        <div className={style.inner_form}>
          {currentStep === 1 && (
            <PrimaryReason value={formData.primaryReason} updateFormData={updateFormData} />
          )}
          {currentStep === 2 && (
            <HowOften value={formData.howOften} updateFormData={updateFormData} />
          )}
          {currentStep === 3 && (
            <Suggestions value={formData.suggestions} updateFormData={updateFormData} />
          )}
          {currentStep === 4 && <Summary data={formData} nextStep={nextStep} />}
          {currentStep === 5 && <Thankyou onCurrentStep={setCurrentStep} />}
        </div>
        <Button prevStep={prevStep} nextStep={nextStep} />

      </div>

      <Footer />

    </div>
  );
};

//***************************************************/
/*
import { useState } from "react";
import { Age } from "./Age";
import { Album } from "./Album";
import { Artist } from "./Artist";
import { Band } from "./Band";
import { Email } from "./Email";
import { Name } from "./Name";

export const MultiStepForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    favoriteBand: "",
    favoriteAlbum: "",
    favoriteArtist: "",
  });

  // Function to update form data based on field and value
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  // The updateFormData function is designed to update the state of formData based on the provided field and value arguments. Let's break it down step by step:

  // Function Arguments:

  // field: This argument represents the key (or property name) in the formData object that you want to update. For example, it could be "name", "age", "email", etc.
  // value: This argument represents the new value that you want to assign to the specified field.
  // setFormData:

  // This is the state update function provided by the useState hook for the formData state. It's used to update the state of formData.
  // Function Body:

  // prev: This represents the current state of formData before any updates. It's a common pattern to use a function inside setState (or setFormData in this case) when the next state depends on the previous state.

  // { ...prev }: This syntax is called the spread operator. It's used to create a new object that contains all of the properties of the prev object. This ensures that we're not directly mutating the state, but instead creating a new copy of it.

  // [field]: value: This is a computed property name. It allows you to set the property of an object based on the value of a variable (field in this case). The value of this property will be set to the value argument passed to the function. For example, if field is "name" and value is "John", this would add or update the property "name" with the value "John" in the new object.

  // In summary, the updateFormData function takes a field and a value, and updates the formData state by creating a new object that contains all the previous properties and values, but with the specified field updated to the new value.

  /// GOING BACK AND FORTH BETWEENQUESTIONS

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
   
      {currentStep === 1 && (
        <Name value={formData.name} updateFormData={updateFormData} />
      )}

      {currentStep === 2 && (
        <Age value={formData.age} updateFormData={updateFormData} />
      )}

      {currentStep === 3 && (
        <Email value={formData.email} updateFormData={updateFormData} />
      )}

      {currentStep === 4 && (
        <Band value={formData.favoriteBand} updateFormData={updateFormData} />
      )}
  
      {currentStep === 5 && (
        <Album value={formData.favoriteAlbum} updateFormData={updateFormData} />
      )}
   
      {currentStep === 6 && (
        <Artist
          value={formData.favoriteArtist}
          updateFormData={updateFormData}
        />
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
*/
