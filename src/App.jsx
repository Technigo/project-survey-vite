import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Summary } from "./components/Summary"
import { Favoriteperson } from "./components/Favoriteperson.jsx"
import { Celebrity } from "./components/Celebrity.jsx"
import { SelectPerson } from "./components/SelectPerson.jsx"
import { Name } from "./components/Name";
import { Activity } from "./components/Activity";
import { Country } from "./components/Country";
import { Welcome } from './components/Welcome';
import { useState } from "react";

export const App = () => {
  const [user, setUser] = useState({
    name: "",
    activity: "",
    country: "",
    favPerson: "", // fav-person
    celebrity: "",
    payingPerson: ""
  });

  // State variable that controles the welcome and start survey
  const [showWelcome, setShowWelcome] = useState(true);

  // State to control which question is currently active
  const [activeQuestion, setActiveQuestion] = useState(1);
// Function that handle the button click in welcome page
  const startSurvey = () => setShowWelcome(false);

  // Function to handle user input changes
  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  // Function to validate the name field
  const validateName = () => {
    if (user.name !== "" && isNaN(user.name)) {
      return true;
    } else
      alert("Try again. Please enter a valid favorite person.");
    return false
  }
    // Function to validate the favorite person field
    const validateFavoritePerson = () => {
      if (user.favPerson !== "" && isNaN(user.favPerson)) {
        return true;
      }
      alert("Try again. Please enter a valid favorite person.");
      return false;
    };
  

   // Function to go to the next question
  const goToNextQuestion = () => {
    if (activeQuestion === 1) {
      // If the current question is Name, validate the name before proceeding
      if (!validateName()) {
        return;
      }
    }
    if (activeQuestion === 4) {
      // If the current question is Favoriteperson, validate it before proceeding
      if (!validateFavoritePerson()) {
        return;
      }
    }
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

// Function to reset the state and restart the survey
const restartSurvey = () => {
  setUser({
    name: "",
    activity: "",
    country: "",
    favPerson: "", 
    celebrity: "",
    payingPerson: ""
  });
  setActiveQuestion(1); // Set activeQuestion back to 1 to start the survey from the first question
};

// Function to decide what happens when a form is submitted
const handleFormSubmit = (e) => {
  e.preventDefault(); // Prevents the default form submission behavior
  
  if (activeQuestion < 3) {
    goToNextQuestion();
  } else {
    handleSubmit();
  }
};


  // Rendering components
  return (
    <>
      <Header />
      <div className="questions-wrapper">
      {showWelcome ? (
          <Welcome startSurvey={startSurvey} />
          ) : (
         <>   
        {activeQuestion === 1 && (
          <form onSubmit={handleFormSubmit}>
            <Name user={user} handleInputChange={handleInputChange} />
            <button className="submit-button" type="submit" onClick={goToNextQuestion}>Next</button>
          </form>
        )}
      
        {activeQuestion === 2 && (
          <form onSubmit={handleFormSubmit}>
            <Activity user={user} handleInputChange={handleInputChange} />
            <div className="btn-grid">
            <button className="submit-button" type="button" onClick={goToPrevQuestion}>Prev</button>
              <button className="submit-button" type="submit" onClick={goToNextQuestion}>Next</button>
              </div>
          </form>
        )}
      
        {activeQuestion === 3 && (
          <form onSubmit={handleFormSubmit}>
            <Country user={user} handleInputChange={handleInputChange} />
            <div className="btn-grid">
            <button className="submit-button" type="button" onClick={goToPrevQuestion}>Prev</button>
              <button className="submit-button" type="submit" onClick={goToNextQuestion}>Next</button>
              </div>
          </form>
        )}
        {activeQuestion === 4 && (
          <form onSubmit={handleFormSubmit}>
            <Favoriteperson user={user} handleInputChange={handleInputChange} />
            <div className="btn-grid">
            <button className="submit-button" type="button" onClick={goToPrevQuestion}>Prev</button>
              <button className="submit-button" type="submit" onClick={goToNextQuestion}>Next</button>
              </div>
          </form>
        )}

        {activeQuestion === 5 && (
          <form onSubmit={handleFormSubmit}>
            <Celebrity user={user} handleInputChange={handleInputChange} />
            <div className="btn-grid">
            <button className="submit-button" type="button" onClick={goToPrevQuestion}>Prev</button>
              <button className="submit-button" type="submit" onClick={goToNextQuestion}>Next</button>
              </div>
          </form>
        )}

        {activeQuestion === 6 && (
          <form onSubmit={handleFormSubmit}>
            <SelectPerson user={user} handleInputChange={handleInputChange} />
            <div className="btn-grid">
            <button className="submit-button" type="button" onClick={goToPrevQuestion}>Prev</button>
              <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
              </div>
          </form>
        )}
        {activeQuestion === 'summary' && <Summary user={user} restartSurvey={restartSurvey} />}
        </>
          )}
      </div>
      <Footer />
    </>
  );
};