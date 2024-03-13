import { Level } from "./survey-components/Level";
import { Choices } from "./survey-components/Choices";
import { Location } from "./survey-components/location";
import { Results } from "./survey-components/Result";


export const Survey = () => {
  return (
    <div className="survey">
          <p>Survey component</p>
          <Level />
          <Choices />
      <Location />
      <Results />
    </div>
  );
};
