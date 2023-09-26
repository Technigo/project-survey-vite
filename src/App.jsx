import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Summary } from "./components/Summary"
import { Name } from "./components/Name";
import { Activity } from "./components/Activity";
import { Country } from "./components/Country";
import { useState } from "react";

export const App = () => {
  // Creating state variables to store user input and control visibility of the Summary component
  const [user, setUser] = useState({
   name: "",
   activity: "",
   country: ""
  });

   // State to control which question is currently active
   const [activeQuestion, setActiveQuestion] = useState(1);
  
   // Function to handle user input changes
   const handleInputChange = (e) => {
     setUser({
       ...user,
       [e.target.name]: e.target.value,
     });
   };
 
   // Function to go to the next question
   const goToNextQuestion = () => {
     setActiveQuestion(activeQuestion + 1);
   };
   
   // Function to go to the previous question
   const goToPrevQuestion = () => {
     setActiveQuestion(activeQuestion - 1);
   };
 
   // Function to submit the form and show the summary
   const handleSubmit = () => {
     setActiveQuestion('summary');
   };
  // Rendering components
  return (
    <>
     <Header />
     {activeQuestion === 1 && (
        <>
          <Name user={user} handleInputChange={handleInputChange} />
          <button onClick={goToNextQuestion}>Next</button>
        </>
      )}
      
      {activeQuestion === 2 && (
        <>
          <Activity user={user} handleInputChange={handleInputChange} />
          <button onClick={goToPrevQuestion}>Prev</button>
          <button onClick={goToNextQuestion}>Next</button>
        </>
      )}
      
      {activeQuestion === 3 && (
        <>
          <Country user={user} handleInputChange={handleInputChange} />
          <button onClick={goToPrevQuestion}>Prev</button>
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
      
      {activeQuestion === 'summary' && <Summary user={user} />}
        <Footer /> 
    </>
  )
};
