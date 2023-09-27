/* eslint-disable react/no-unescaped-entities */
import { FavQuestions } from "./FavQuestions";
import { InfoQuestions } from "./InfoQuestions";
import { Buttons } from "./Buttons";
import { Summary } from "./Summary";
import { useState } from "react";
import { TrainingFrequency } from "./TrainingFrequency";
import { FitnessGoal } from "./FitnessGoal";
import { LivingArea } from "./LivingArea";

export const Questions = () => {

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [livingArea, setLivingArea] = useState("select");
  const [favourite, setFavourite] = useState("Others");
  const [frequency, setFrequency] = useState("Rarely");
  const [fitnessGoal, setFitnessGoal] = useState("");
  
  /* Function to handle submission */
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Something else here */
  };

  /* Add validation to the steps and function to move to the next question when the user clicks on Next button */
  const next = () => {
    if (step === 1) {
      if (!name || !email) {
        alert("Please fill in your info before moving to the next step!");
        return;
      }
    }

    if(step === 2) {
      if (livingArea === "select") {
        alert("Please choose one option");
        return;
      }
    } 

    if (step === 3) {
      if (favourite === "Others") {
        let answerPrompt = prompt("what is your favourite exersice?");
        console.log(answerPrompt);
        return;
      }
    }
    
    setStep((prevStep) => {
      return prevStep + 1
    });
  }

  /* Function to move to the previous question when the user clicks on Back button */
  const back = () => {
    setStep((prevStep) => {
      return prevStep - 1
    });
  }

  /* Function to place the submission at the final step/question */
  const submit = () => {
    setStep(5);
  }

  /* Functions to update the state variables based on the user's answers */
  const handleInputNameChange = (e) => {
    setName(e.target.value);
  }

  const handleInputEmailChange = (e) => {
    setEmail(e.target.value);
  }
 
  const updateLivingArea = (e) => {
    setLivingArea(e.target.value);
  }

  const onRadioChange = (e) => {
    setFavourite(e.target.value)
  }

  const updateFrequency = (e) => {
    setFrequency(e.target.value)
  };
  
  const updateTextarea = (e) => {
    setFitnessGoal(e.target.value);
  }
  
  return (
    <>
      {/* Add steps here and connect to the corresponding components */}
      <form action="" onSubmit={handleSubmit} required>
        {step === 1 && 
          <InfoQuestions name={name} email={email} onChangeName={handleInputNameChange} onChangeEmail={handleInputEmailChange}/>
        }
        {step === 2 && 
          <LivingArea livingArea={livingArea} onChangeLivingArea={updateLivingArea} />
        }
        {step === 3 && 
          <FavQuestions fav={favourite} onChangeFav={onRadioChange} />
        }
        {step === 4 && 
          <TrainingFrequency freq={frequency} onChangeFreq={updateFrequency}/>
        }
        {step === 5 && 
          <FitnessGoal goal={fitnessGoal} onChangeText={updateTextarea} />
        }
      </form>

      <Buttons onBack={back} onNext={next} currentStep={step} onSubmit={submit} />
      <Summary />
    </>
  );
};