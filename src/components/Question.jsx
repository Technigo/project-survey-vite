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


  const optionsWithImages = [
    { label: 'Rachel Green', image: '/rachel.jpeg' },
    { label: 'Ross Geller', image: '/ross.webp' },
    { label: 'Monica Geller', image: '/monica.jpg' },
    { label: 'Chandler Bing', image: '/chandler.webp' },
    { label: 'Joey Tribbiani', image: '/joey.jpeg' },
    { label: 'Phoebe Buffay', image: '/Phoebe.jpeg' },
  ];

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
          {optionsWithImages.map((option) => (
            <label key={option.label}>
              <input
                type="checkbox"
                value={option.label}
                checked={answer.includes(option.label)}
                onChange={handleCheckbox}
              />
              {option.label}
              <img src={`/images/${option.value}`} alt={option.label} />
            </label>
          ))}
        </div>
      )}
      {question.type === 'dropdown' && (
        <select value={answer} onChange={handleDropDown} multiple={false}>  {/* Suppress warning */}
          <option value="">Select an option</option>
          {optionsWithImages.map((option) => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      {question.type === 'radio' && (
        <div>
          {optionsWithImages.map((option) => (
            <label key={option.label}>
              <input
                type="radio"
                value={option.label}
                checked={answer === option.label}
                onChange={handleInputChange}
              />
              {option.label}
              <img src={`/images/${option.value}`} alt={option.label} />
            </label>
          ))}
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Question;