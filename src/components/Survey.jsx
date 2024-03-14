import PropTypes from "prop-types";
import { Level } from "./survey-components/Level";
import { Choices } from "./survey-components/Choices";
import { Location } from "./survey-components/location";
import { Company } from "./survey-components/Company";
import "../app.css";

export const Survey = ({ setDisplayLevel, setDisplayChoices, setDisplayLocation, setDisplayCompany }) => {
  return (
    <div className="survey">
      <div className="intro">
        <h2>What kind of Pizza person are you?</h2>
      </div>
      <Level setDisplayLevel={setDisplayLevel} />
      <Choices setDisplayChoices={setDisplayChoices} />
      <Location setDisplayLocation={setDisplayLocation} />
      <Company setDisplayCompany={setDisplayCompany} />
    </div>
  );
};

Survey.propTypes = {
  setDisplayLevel: PropTypes.string,
  setDisplayChoices: PropTypes.number,
  setDisplayLocation: PropTypes.string,
  setDisplayCompany: PropTypes.string,
};


