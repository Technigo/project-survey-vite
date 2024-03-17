import "./RadioType.css";

export const RadioType = ({ index, question, handleChange, handleVisitor }) => {
  if (index === 5) {
    return (
      <fieldset className="input-section">
        <div className="question-area">
          <legend>{question.questionText}</legend>
        </div>

        <div className="radio-option-area">
          {question.options.map((option) => (
            <div key={option.id} className="each-option">
              <input
                className="radio-box"
                type="radio"
                id={option.id}
                name={question.id}
                value={option.optionText}
                onChange={handleChange}
              />
              <label className="radio-option-text" htmlFor="{option.id}">
                {option.optionText}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    );
  } else {
    return (
      <fieldset className="input-section">
        <div className="question-area">
          <legend>{question.questionText}</legend>
        </div>
        <div className="radio-option-area">
          {question.options.map((option) => (
            <div key={option.id} className="each-option">
              <input
                className="radio-box"
                type="radio"
                id={option.id}
                name={question.id}
                value={option.optionText}
                onChange={(event) => handleVisitor(event.target.value)}
              />
              <label className="radio-option-text" htmlFor="{option.id}">
                {option.optionText}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    );
  }
};
