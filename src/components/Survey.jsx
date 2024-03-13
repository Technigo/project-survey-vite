import { useState } from "react";
// import PropTypes from "prop-types";
import { Level } from "./survey-components/Level";
import { Choices } from "./survey-components/Choices";
import { Location } from "./survey-components/location";
import { Company } from "./survey-components/Company";
import "../app.css";

export const Survey = () => {
  return (
    <div className="survey">
      <div className="intro">
        <h2>What kind of Pizza person are you?</h2>
      </div>
      <Level />
      <Choices />
      <Location />
      <Company />
    </div>
  );
};

export const Result = () => {
  const [displayLevel, setDisplayLevel] = useState("");
  const [displayChoices, setDisplayChoices] = useState("");
  const [location, setLocation] = useState("");
  const [displayCompany, setDisplayCompany] = useState("");

  return (
    <div className="result-container">
      <h2>You are super picky when it comes to pizza.</h2>

      <p className="result">Your level: {displayLevel}</p>
      <p className="result">Your level: {displayChoices}</p>
      <p className="result">Your Location: {location}</p>
      <p className="result">Your company: {displayCompany}</p>

      <Level setDisplayLevel={setDisplayLevel} />
      <Choices setDisplayChoices={setDisplayChoices} />
      <Location setLocation={setLocation} />
      <Company setCompany={setDisplayCompany} />
    </div>
  );
};

// Result.propTypes = {
//   setDisplayLevel: PropTypes.string,
// };
