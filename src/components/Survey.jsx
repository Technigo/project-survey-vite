import { useState } from "react";
import PropTypes from "prop-types";
import { Level } from "./survey-components/Level";
import { Choices } from "./survey-components/Choices";
import { Location } from "./survey-components/location";
import { Company } from "./survey-components/Company";
import "../app.css";

export const Survey = () => {
  const [displayLevel, setDisplayLevel] = useState("Not chosen");
  const [displayChoices, setDisplayChoices] = useState("Not chosen");
  const [location, setLocation] = useState("Not chosen");
  const [displayCompany, setDisplayCompany] = useState("Not chosen");

  return (
    <div className="survey">
      <div className="intro">
        <h2>What kind of Pizza person are you?</h2>
      </div>
      <Level setDisplayLevel={setDisplayLevel} />
      <Choices setDisplayChoices={setDisplayChoices} />
      <Location setLocation={setLocation} />
      <Company setDisplayCompany={setDisplayCompany} />

      <Result
        displayLevel={displayLevel}
        displayChoices={displayChoices}
        location={location}
        displayCompany={displayCompany}
      />
    </div>
  );
};

export const Result = ({displayLevel, displayChoices, location, displayCompany}) => {


  return (
    <div className="result-container">
      <h2>You are super picky when it comes to pizza.</h2>

      <p className="result">Your level: {displayLevel}</p>
      <p className="result">Your level: {displayChoices}</p>
      <p className="result">Your Location: {location}</p>
      <p className="result">Your company: {displayCompany}</p>


    </div>
  );
};

Result.propTypes = {
  displayLevel: PropTypes.string,
  displayChoices: PropTypes.number,
  location: PropTypes.string,
  displayCompany: PropTypes.string,
};
