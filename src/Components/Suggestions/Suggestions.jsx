import style from "./Suggestions.module.css";
import { SecondaryHeading } from "../SecondaryHeading/SecondaryHeading";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const Suggestions = ({ updateFormData, value, error }) => {
  const thirdQuestion = (e) => updateFormData("thirdQuestion", e.target.value);

  return (
    <div>
      <SecondaryHeading question="3. What suggestions do you have to improve your shopping experience?" />
      <ErrorMessage error={error} />
      <div className={style.input_wrapper}>
        <textarea
          id="input"
          className={style.text_input}
          placeholder="Please type here"
          rows="3"
          onChange={thirdQuestion}
          value={value}
        ></textarea>
      </div>
    </div>
  );
};
