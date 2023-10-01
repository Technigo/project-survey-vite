
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
  const [livingArea, setLivingArea] = useState("");  
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [frequency, setFrequency] = useState("Rarely");
  const [fitnessGoal, setFitnessGoal] = useState("");
 
    
  const handleSubmit = (e) => {
    e.preventDefault();   
   
    setStep(6);
  };
  
  const restart = () => {
    setStep(1);
    setName("");
    setEmail("");
    setLivingArea("");
    setSelectedExercises([]);
    setFrequency("Rarely");
    setFitnessGoal("");
  }

 
  const next = () => {
    if (step === 1) {
      if (!name || !email) {
        alert("Please fill in your info before moving to the next step!");
        return;
      }
    }

    if(step === 2) {
      if (livingArea === "") {
        alert("Please choose one option!");
        return;
      }
    } 

    if (step === 3) {
      if (selectedExercises.length === 0) {
        alert("Please select at least one exercise!");
        return; 
      }
    }

    if (step === 5) {
      if (fitnessGoal === "") {       
        alert("Please fill in your fitness goal!");        
        return;
      }
    }
    
    setStep((prevStep) => {
      return prevStep + 1
    });
  }
  
  const back = () => {
    setStep((prevStep) => {
      return prevStep - 1
    });
  }
 
  const submit = () => {
    setStep(6);
  }
 
  const handleInputNameChange = (e) => {
    setName(e.target.value);
  }

  const handleInputEmailChange = (e) => {
    setEmail(e.target.value);
  }
 
  const updateLivingArea = (e) => {
    setLivingArea(e.target.value);
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target; 
    if (checked) {
      setSelectedExercises((selected) => [...selected, value]);     
    } else {
      setSelectedExercises((selected) => selected.filter((option) => option !== value));
    }  
  }

  const updateFrequency = (e) => {
    setFrequency(e.target.value)
  }
  
  const updateTextarea = (e) => {
    setFitnessGoal(e.target.value);
  }
  
  return (
    <>
      {/* Add steps here and connect to the corresponding components */}    
        <form required>
        {step === 1 && 
          <InfoQuestions name={name} email={email} onChangeName={handleInputNameChange} onChangeEmail={handleInputEmailChange}/>
        }
        {step === 2 && 
          <LivingArea livingArea={livingArea} onChangeLivingArea={updateLivingArea} />
        }
        {step === 3 && 
          <FavQuestions fav={selectedExercises} onChangeFav={handleCheckboxChange} />
        }
        {step === 4 && 
          <TrainingFrequency freq={frequency} onChangeFreq={updateFrequency}/>
        }
        {step === 5 && 
          <FitnessGoal goal={fitnessGoal} onChangeText={updateTextarea} />
        }
        {step === 6 && 
          <Summary name={name} email={email} livingArea={livingArea} fav={selectedExercises} freq={frequency} goal={fitnessGoal} onChangeSummary={handleSubmit} />
        }          
      </form>
      <Buttons onBack={back} onNext={next} currentStep={step} onSubmit={submit} onRestart={restart} />      
    </>
  );
};