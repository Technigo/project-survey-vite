import React, { useState } from "react";
import Header from "./components/header";
import SurveyInfo from "./components/SurveyInfo";
import QuestionExcited from "./components/QuestionExcited";
import QuestionGender from "./components/QuestionGender";
import QuestionAge from "./components/QuestionAge";
import QuestionCelebrate from "./components/QuestionCelebrate";
import QuestionLikeMost from "./components/QuestionLikeMost";
import QuestionGift from "./components/QuestionGift";
import SurveySummary from "./components/SurveySummary";
import Footer from "./components/footer";

function App() {
  const [answers, setAnswers] = useState({
    celebrateChristmas: "",
    excitementLevel: "", 
    selectedGender: "",
    selectedAge: "", 
    option: [],
    likedOption: "",
  });

  const [showSummary, setShowSummary] = useState(false);

  const handleAnswer = (question, answer) => {
    if (question === "") {
    
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        excitementLevel: answer,
      }));
    } else {
      
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [question]: answer,
      }));
    }
  };

  const handleSubmit = () => {
    setShowSummary(true);
  };

  const displaySurvey = () => {
    if (answers.celebrateChristmas === "No") {
     
      return (
        <div id="survey">
          <SurveyInfo />
          <p>Thank you for your time. This survey is not for you.</p>
        </div>
      );
    }

    return (
      <div id="survey">
        <SurveyInfo />

        {/* Render all questions */}
        <QuestionCelebrate
          onAnswer={(answer) => handleAnswer("celebrateChristmas", answer)}
          celebrateChristmas={answers.celebrateChristmas}
        />
        <QuestionExcited
          onAnswer={(answer) => handleAnswer("", answer)} 
          excitementLevel={answers.excitementLevel}
        />
        <QuestionGender
          onGenderChange={(selectedGender) =>
            handleAnswer("selectedGender", selectedGender)
          }
          selectedGender={answers.selectedGender}
        />
        <QuestionAge
          selectedAge={answers.selectedAge}
          setSelectedAge={(newAge) => handleAnswer("selectedAge", newAge)}
        />
        <QuestionLikeMost
          onAnswer={(answer) => handleAnswer("option", answer)}
          option={answers.option || []}
        />
        <QuestionGift
          onAnswer={(answer) => handleAnswer("likedOption", answer)}
          likedOption={answers.likedOption}
        />

        {/* Render the Submit button */}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };

  return (
    <div className="App">
      <Header />

      {!showSummary && displaySurvey()}

      {/* Pass the answers to SurveySummary when showSummary is true */}
      {showSummary && (
        <SurveySummary
          surveyAnswers={{
            celebrateChristmas: answers.celebrateChristmas,
            excitementLevel: answers.excitementLevel,
            selectedGender: answers.selectedGender,
            selectedAge: answers.selectedAge,
            option: answers.option,
            likedOption: answers.likedOption,
          }}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;

