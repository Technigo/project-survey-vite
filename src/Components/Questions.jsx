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
  const [name , setName] = useState("");
  const [email , setEmai] = useState("");
  const [livingArea, setLivingArea] = useState("select");
  const [favourite , setFavourite] = useState("Others");
  const [frequency, setFrequency] = useState("Rarely");
  const [fitnessGoal, setFitnessGoal] = useState("");
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    /* Something else here */
  }
  const next = () => {
    if(step === 1){
      if(!name || !email){
        alert("Please fill in your info for showing the next step!")
        return
      }
      
    }
    if(step === 2){
      if(livingArea === "select"){
        alert("Please choose one option")
        return
      }
    } 
    if(step === 3){
      if(favourite === "Others"){
       let answerPrompt = prompt("what is your favourite exersice?")
       console.log(answerPrompt)
        return
        
      }
    }
    
    
    
    setStep((prevStep) => {
      return prevStep + 1
    })
  }

  const back = () => {
    setStep((prevStep) => {
      return prevStep - 1
  })
}
  const submit = ()=>{
    setStep(5)
 
  }

  const handleInputNameChange = (e)=>{
    setName(e.target.value)

 }
 const handleInputEmailChange = (e)=>{
    setEmai(e.target.value)

 }
 const updateLivingArea = (e) => {
  setLivingArea(e.target.value);
}

const onRadioChange = (e) => {
  setFavourite(e.target.value);
}
const updateFrequency = (e) => {
  setFrequency(e.target.value);
};
const updateTextarea = (e) => {
  setFitnessGoal(e.target.value);
}
    return (
      <>
        {/* Add steps here */}
        <form action="" onSubmit={handleSubmit} required>
          {step === 1 && 
            <InfoQuestions name={name} email={email} onChangeName={handleInputNameChange} onChangeEmail={handleInputEmailChange}/>
          }
          {step === 2 && 
            <LivingArea livingArea={livingArea} onChaneLiving={updateLivingArea} />
          }
          {step === 3 && 
            <FavQuestions  fav={favourite} onChangeFav={onRadioChange} />
          }
          {step === 4 && 
            <TrainingFrequency freq={frequency} onchangeFreq={updateFrequency}/>
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