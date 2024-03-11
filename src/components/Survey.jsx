import { Level } from "./survey-components/Level";
import { Choices } from "./survey-components/Choices";
import { Location } from "./survey-components/location";

export const Survey = () => {
  return (
    <div className="survey">
          <p>Survey component</p>
          <Level />
          <Choices />
          <Location />
    </div>
  );
};
