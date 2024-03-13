import { Level } from "./survey-components/Level";
import { Choices } from "./survey-components/Choices";
import { Location } from "./survey-components/location";
import { Company } from "./survey-components/Company"
import "../app.css"

export const Survey = () => {
  return (
    <div className="survey">
          <div className="intro"><h2>What kind of Pizza person are you?</h2></div>
          <Level />
          <Choices />
          <Location />
          <Company />
    </div>
  );
};
