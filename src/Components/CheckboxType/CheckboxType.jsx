import "./CheckboxType.css";

export const CheckboxType = ({ question, handleChecked, handleUncheck }) => {
  return (
    <section className="input-section">
      <div className="question-area">
        <p>{question.questionText}</p>
      </div>

      <div className="feature-option-area">
        {question.options.map((option) => (
          <div className="feature-option" key={option.id}>
            <input
              className="feature-checkbox"
              type="checkbox"
              id={option.id}
              name={option.id}
              value={option.optionText}
              onChange={(event) => {
                if (event.target.checked) {
                  handleChecked(option.optionText);
                } else {
                  handleUncheck(option.optionText);
                }
              }}
            />
            <label className="feature-text" htmlFor="{option.id}">
              {option.optionText}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};
