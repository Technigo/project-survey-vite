export const RangeType = ({ question, handleChange }) => {
  return (
    <section className="input-section">
      <div className="question-area">
        <p>{question.questionText}</p>
      </div>
      <div className="option-area">
        <p>Not necessary</p>

        <input
          type="range"
          id={question.id}
          name={question.id}
          min="0"
          max="10"
          list="{question.id}"
          onChange={handleChange}
        />
        <datalist id="{question.id}">
          <option value="0">Not necessary</option>
          <option value="5">Somewhat important</option>
          <option value="10">Extremely important</option>
        </datalist>

        <p>Extremely important</p>
      </div>
    </section>
  );
};
