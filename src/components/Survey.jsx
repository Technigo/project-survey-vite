import { Level } from "./survey-components/Level"
import { Toppings } from "./survey-components/toppings";
import { Location } from "./survey-components/Location"

export const Survey = () => {
  return (
    <div className="survey">
          <p>Survey component</p>
          <Level />
          <Toppings />
          <Location />
    </div>
  );
};
