import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Summary } from "./components/Summary"
import { Favoriteperson } from "./components/Favoriteperson.jsx"
import { Celebrity } from "./components/Celebrity.jsx"
import { SelectPerson } from "./components/SelectPerson.jsx"
import { useState } from "react";

export const App = () => {
const [user, setUser] = useState({

favPerson: "", // fav-person
celebrity: "",
payingPerson: ""
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
    <Favoriteperson user={user} handleInputChange={handleInputChange} />
    <button onClick={goToNextQuestion}>Next</button>
  </>
  )}

  {activeQuestion === 2 && (
  <>
    <Celebrity user={user} handleInputChange={handleInputChange} />
    <button onClick={goToPrevQuestion}>Prev</button>
    <button onClick={goToNextQuestion}>Next</button>
  </>
  )}

  {activeQuestion === 3 && (
  <>
    <SelectPerson user={user} handleInputChange={handleInputChange} />
    <button onClick={goToPrevQuestion}>Prev</button>
    <button onClick={handleSubmit}>Submit</button>
  </>
  )}

  {activeQuestion === 'summary' && <Summary user={user} />}
  <Footer />

</>
)
};