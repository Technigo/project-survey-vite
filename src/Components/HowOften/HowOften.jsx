import style from "./HowOften.module.css";
import { SecondaryHeading } from "../SecondaryHeading/SecondaryHeading";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const HowOften = ({ updateFormData, value, error }) => {
  const handleHowOftenChange = (e) => updateFormData("howOften", e.target.value);


  return (
    <div>
      <SecondaryHeading question="2. How frequently did you make an order?" />
      <ErrorMessage error={error} />

      <select onChange={handleHowOftenChange} value={value} className={style.input_wrapper}>
        <option value="">Options: </option>
        <option value="Monthly">Monthly</option>
        <option value="Every-second-month">Every second month</option>
        <option value="Rarely">Rarely</option>
        <option value="Never">Never</option>
      </select>
    </div>
  );
};
