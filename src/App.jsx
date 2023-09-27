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
  const [showCatProfile, setShowCatProfile] = useState(false);
  const [showSurvey, setShowSurvey] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowCatProfile(true);
    setShowSurvey(false);
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
      {showSurvey && (
        <div className="page-in-survey">
          <div className="form-div">
            <StartPage />
            <Username userName={userName} setUserName={setUserName} />
            <Gender genders={genders} setGenders={setGenders} />
            <Age age={age} setAge={setAge} />
            <Personality
              personality={personality}
              setPersonality={setPersonality}
            />
            <ChooseCat chooseCat={chooseCat} setChooseCat={setChooseCat} />
            <CatName catName={catName} setCatName={setCatName} />

            {/* Add a submit button */}
            <button
              type="submit"
              className="submitBtn"
              aria-label="Submit button"
              disabled={surveyAnswered()}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {showCatProfile && (
        <CatProfile
          userName={userName}
          genders={genders}
          age={age}
          personality={personality}
          chooseCat={chooseCat}
          catName={catName}
        />
      )}
    </section>
  );
};
