import style from "./Suggestions.module.css";

export const Suggestions = ({ updateFormData }) => {
  const thirdQuestion = (e) => updateFormData("thirdQuestion", e.target.value);
  
  return (
    <div>
      <h2>What suggestions do you have to improve your shopping experience?</h2>
      <div className={style.input_wrapper}>
        <textarea
          id="input"
          className={style.text_input}
          placeholder="Please type here"
          rows="3"
          onChange={thirdQuestion}
        ></textarea>
      </div>
    </div>
  );
};

//   3. What suggestions do you have to improve your shopping experience?
// (Text Input)