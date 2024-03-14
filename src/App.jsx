import { useState } from "react";
import { Survey } from "./components/Survey";
import { Result } from "./components/Result";
import { Header } from "./components/Header";
import { Submit } from "./components/Submit";
import "./app.css";

export const App = () => {
  const [displayLevel, setDisplayLevel] = useState("Not chosen");
  const [displayChoices, setDisplayChoices] = useState(0);
  const [displayLocation, setDisplayLocation] = useState("Not chosen");
  const [displayCompany, setDisplayCompany] = useState("Not chosen");
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      <Header />
      {showResults ?
        <div className="main-container">
          <Survey
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
        :
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
        }
      <div className="submit-container">
        <Submit showResults={showResults} setShowResults={setShowResults} />
      </div>
    </>
  );
};
