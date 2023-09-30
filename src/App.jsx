import { useState } from "react";
import { Username } from "./components/Username/Username";
import { Gender } from "./components/Gender/Gender";
import { Age } from "./components/Age/Age";
import { ChooseCat } from "./components/ChooseCat/ChooseCat";
import { StartPage } from "./components/StartPage/StartPage";
import { CatName } from "./components/CatName/CatName";
import { Personality } from "./components/Personality/Personality";
import { CatProfile } from "./components/CatProfile";

export const App = () => {
  const [age, setAge] = useState("");
  const [catName, setCatName] = useState("");
  const [chooseCat, setChooseCat] = useState("");
  const [genders, setGenders] = useState("");
  const [personality, setPersonality] = useState("");
  const [userName, setUserName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formVisible, setFormVisible] = useState(false); // The surveys visiblity after clicking the "adopt now" button on StartPage

  // Function to show the survey after clicking the "adopt now" button on StartPage
  const handleShowForm = () => {
    setFormVisible(true);
  };

  // Function to move to the next step in the form
  const handleNextQuestion = () => {
    if (currentQuestion < 7) {
      setCurrentQuestion(currentQuestion + 1);
      // Call handleShowForm when transitioning from currentQuestion 0
      if (currentQuestion === 0) {
        handleShowForm();
      }
    }
  };
  // Function to move to the previous step in the form
  const handlePrevQuestion = () => {
    if (currentQuestion > 1) setCurrentQuestion(currentQuestion - 1);
  };
  // When the 'handleReset' function is called (by clicking the reset-button), all formfields are emptied.
  const handleReset = () => {
    setAge("");
    setCatName("");
    setChooseCat("");
    setGenders("");
    setPersonality("");
    setUserName("");
    setCurrentQuestion(0);
    setFormVisible(false);
  };
  // This is a dynamic rendering of components based on the value of 'currentQuestion'. Depending on the current question number, it renders a specific component with the appropriate props necessary for that step in the survey.
  return (
    <section className="page-in-survey">
      {currentQuestion === 0 && (
        // This is a function that will be passed down to StartPage and is expected to handle the next question in the survey.
        <StartPage
          handleNextQuestion={handleNextQuestion}
          onButtonClick={() => handleNextQuestion(0)}
        />
      )}
      {formVisible && (
        <div className="form-div">
          {currentQuestion === 1 && (
            <Username
              userName={userName}
              setUserName={setUserName}
              currentQuestion={currentQuestion}
            />
          )}

          {currentQuestion === 2 && (
            <Gender genders={genders} setGenders={setGenders} />
          )}

          {currentQuestion === 3 && <Age age={age} setAge={setAge} />}

          {currentQuestion === 4 && (
            <Personality
              personality={personality}
              setPersonality={setPersonality}
            />
          )}

          {currentQuestion === 5 && (
            <ChooseCat chooseCat={chooseCat} setChooseCat={setChooseCat} />
          )}

          {currentQuestion === 6 && (
            <CatName catName={catName} setCatName={setCatName} />
          )}

          {currentQuestion === 7 && (
            <CatProfile
              userName={userName}
              genders={genders}
              age={age}
              personality={personality}
              chooseCat={chooseCat}
              catName={catName}
            />
          )}

          <div className="buttons-wrapper">
            {/* Show the "Back" button if not on the first step */}

            <div className="prev-next-container">
              {currentQuestion > 1 && currentQuestion < 7 && (
                <button className="prev-btn" onClick={handlePrevQuestion}>
                  <img src="/prev.png" alt="" />
                </button>
              )}
              {currentQuestion < 6 && currentQuestion !== 0 && (
                <button className="next-btn" onClick={handleNextQuestion}>
                  <img src="./next.png" alt="" />
                </button>
              )}

              {/* 'aria-label' is an accessability attribute that provides an accessible label for screen readers, informing them about the purpose of the button. */}
              {currentQuestion === 6 && (
                <button
                  type="submit"
                  className="submit-btn"
                  aria-label="Submit button"
                  onClick={handleNextQuestion}
                >
                  Meet your cat!
                </button>
              )}
            </div>
            {/* Check if the current question is between 1 and 7 (inclusive) and that it's not 0. If both conditions are met, it renders a button that, when clicked, will trigger the 'handleReset' function which, in this case, will reload the form. */}
            {currentQuestion <= 7 && currentQuestion !== 0 && (
              <button type="submit" className="reset-btn" onClick={handleReset}>
                Start over
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
