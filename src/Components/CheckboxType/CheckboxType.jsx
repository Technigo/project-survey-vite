export const CheckboxType = ({ question, handleChecked, handleUncheck }) => {
  return (
    <fieldset className={`input-section ${question.id}`}>
      <legend>{question.questionText}</legend>
      <div className="option-secton">
        {question.options.map((option) => (
          <div key={option.id} className="each-option">
            <input
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
            <label htmlFor="{option.id}">{option.optionText}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
