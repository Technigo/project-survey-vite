import { useState } from "react";
import { Survey } from "./components/Survey";
import { Result } from "./components/survey-components/Result";
import { Header } from "./components/Header";
import "./app.css";

export const App = () => {
  const [displayLevel, setDisplayLevel] = useState("Not chosen");
  const [displayChoices, setDisplayChoices] = useState(0);
  const [displayLocation, setDisplayLocation] = useState("Not chosen");
  const [displayCompany, setDisplayCompany] = useState("Not chosen");

  return (
    <>
      <Header />

      <div className="main-container">
        <Survey />
      </div>

      <div className="result-container main-container">
        <Result
          displayLevel={displayLevel}
          setDisplayLevel={setDisplayLevel}
          displayChoices={displayChoices}
          setDisplayChoices={setDisplayChoices}
          displaylocation={displayLocation}
          setDisplayLocation={setDisplayLocation}
          displayCompany={displayCompany}
          setDisplayCompany={setDisplayCompany}
        />
      </div>
    </>
  );
};
