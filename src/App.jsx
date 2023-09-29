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
  // const [startPage, setStartPage] = useState("");
  const [userName, setUserName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Function to move to the next step in the form
  const handleNextQuestion = () => {
    if (currentQuestion < 7) setCurrentQuestion(currentQuestion + 1);
  };
  const handlePrevQuestion = () => {
    if (currentQuestion > 1) setCurrentQuestion(currentQuestion - 1);
  };

  const handleReset = () => {
    setAge("");
    setCatName("");
    setChooseCat("");
    setGenders("");
    setPersonality("");
    setUserName("");
    setCurrentQuestion(0);
  };

  // // we use the negation (!) operator to return true if any of the fields is empty, and false if all fields have values.

  // const surveyAnswered = () => {
  //   return !(
  //     userName !== "" &&
  //     genders !== "" &&
  //     age !== "" &&
  //     personality !== "" &&
  //     chooseCat !== "" &&
  //     catName !== ""
  //   );
  // };

  return (
    <section className="content-wrapper">
      <div className="page-in-survey">
        <div className="form-div">
          {currentQuestion === 0 && (
            <StartPage
              handleNextQuestion={handleNextQuestion}
              onButtonClick={() => handleNextQuestion(0)}
            />
          )}

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

          <div className="buttons">
            {/* Show the "Back" button if not on the first step */}

            <div className="prev-next-container">
              {currentQuestion > 1 && currentQuestion < 7 && (
                <button className="prev-btn" onClick={handlePrevQuestion}>
                  <img src="src/assets/prev.png" alt="" />
                </button>
              )}
              {currentQuestion < 6 && currentQuestion !== 0 && (
                <button className="next-btn" onClick={handleNextQuestion}>
                  <img src="src/assets/next.png" alt="" />
                </button>
              )}

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
            {currentQuestion <= 7 && currentQuestion !== 0 && (
              <button type="submit" className="reset-btn" onClick={handleReset}>
                Start over
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};