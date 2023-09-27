import { useState } from 'react';

function Question({ question, onAnswerSubmit }) {
  const [answer, setAnswer] = useState(
    question.type === 'dropdown' ? '' : ''
  );

  const handleInputChange = (e) => {
    const newAnswer = e.target.type === 'checkbox' ? [...answer] : e.target.value;
    setAnswer(newAnswer);
  };

  const handleCheckbox = (e) => {
    const option = e.target.value;
    let newAnswer;

    if (e.target.checked) {
      // If the checkbox is checked, add the option to the answer
      newAnswer = [...answer, option];
    } else {
      // If the checkbox is unchecked, remove the option from the answer
      newAnswer = answer.filter((item) => item !== option);
    }

    setAnswer(newAnswer);
  };

  const handleDropDown = (e) => {
    const newAnswer = e.target.value; // Set the selected option directly as the answer
    setAnswer(newAnswer);
  };

  const handleSubmit = () => {
    onAnswerSubmit(answer);
    setAnswer(question.type === 'checkbox' ? [] : '');
  };

  return (
    <div>
      <h2>{question.text}</h2>
      {question.type === 'text' && (
        <input type="text" value={answer} onChange={handleInputChange} />
      )}
      {question.type === 'number' && (
        <input type="number" value={answer} onChange={handleInputChange} />
      )}
      {question.type === 'checkbox' && (
        <div>
          {question.options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={answer.includes(option)}
                onChange={handleCheckbox}
              />
              {option}
            </label>
          ))}
        </div>
      )}
      {question.type === 'dropdown' && (
        <select value={answer} onChange={handleDropDown} multiple={false}>  {/* Suppress warning */}
          <option value="">Select an option</option>
          {question.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {question.type === 'radio' && (
        <div>
          {question.options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={answer === option}
                onChange={handleInputChange}
              />
              {option}
            </label>
          ))}
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Question;