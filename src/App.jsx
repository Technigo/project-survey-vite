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
  const [startPage, setStartPage] = useState("");
  const [userName, setUserName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);

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

  // we use the negation (!) operator to return true if any of the fields is empty, and false if all fields have values.

  const surveyAnswered = () => {
    return !(
      userName !== "" &&
      genders !== "" &&
      age !== "" &&
      personality !== "" &&
      chooseCat !== "" &&
      catName !== ""
    );
  };

  return (
    <section className="content-wrapper">
      {/* {showSurvey && ( */}
      <div className="page-in-survey">
        <div className="form-div">
          {currentQuestion === 0 && (
            <StartPage onButtonClick={() => handleNextQuestion(0)} />
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

          {currentQuestion === 0 && (
            <button onClick={handleNextQuestion} className="adopt-btn">
              Adopt now
            </button>
          )}

          <div>
            {/* Show the "Back" button if not on the first step */}

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
                className="submitBtn"
                aria-label="Submit button"
                onClick={handleNextQuestion}
              >
                Submit
              </button>
            )}

            {currentQuestion <= 7 && currentQuestion !== 0 && (
              <button type="submit" className="reset-btn" onClick={handleReset}>
                reset
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// return (
//   <div>
//     {/* Render the Name component if on step 1 */}
//     {currentStep === 1 && (
//       <Name value={formData.name} updateFormData={updateFormData} />
//     )}
//     {/* Render the Age component if on step 2 */}
//     {currentStep === 2 && (
//       <Age value={formData.age} updateFormData={updateFormData} />
//     )}
//     {/* Render the Email component if on step 3 */}
//     {currentStep === 3 && (
//       <Email value={formData.email} updateFormData={updateFormData} />
//     )}
//     {/* Render the Band component if on step 4 */}
//     {currentStep === 4 && (
//       <Band value={formData.favoriteBand} updateFormData={updateFormData} />
//     )}
//     {/* Render the Album component if on step 5 */}
//     {currentStep === 5 && (
//       <Album value={formData.favoriteAlbum} updateFormData={updateFormData} />
//     )}
//     {/* Render the Artist component if on step 6 */}
//     {currentStep === 6 && (
//       <Artist
//         value={formData.favoriteArtist}
//         updateFormData={updateFormData}
//       />
//     )}
//     <div>
//       {/* Show the "Back" button if not on the first step */}
//       {currentStep > 1 && <button onClick={prevStep}>Back</button>}
//       {currentStep < 6 ? (
//         <button onClick={nextStep}>Next</button>
//       ) : (
//         <button onClick={submitForm}>Submit Form</button>
//       )}
//     </div>
//   </div>
// );
//};
