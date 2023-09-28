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

  const optionsWithImagesOutfits = [
    { label: 'Rachel Green', image: '/rachelOutfits.jpeg' },
    { label: 'Ross Geller', image: '/rossOutfits.avif' },
    { label: 'Monica Geller', image: '/monicaOutfits.jpeg' },
    { label: 'Chandler Bing', image: '/chandlerOutfits.avif' },
    { label: 'Joey Tribbiani', image: '/joeyOutfits.avif' },
    { label: 'Phoebe Buffay', image: '/phoebeOutfits.jpeg' },
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

          <ul>
            {optionsWithImagesOutfits.map((option) => (
              <li key={option.label}>
                <label>
                  <div className="image-container">
                    <input
                      type="checkbox"
                      value={option.label}
                      checked={answer.includes(option.label)}
                      onChange={handleCheckbox}
                    />

                    <img src={`/images/${option.image}`} alt={option.label} className="image-outfits" />
                    <span className="name">{option.label}</span>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
      {question.type === 'dropdown' && (
        <select value={answer || []} onChange={handleDropDown}>
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

          <ul>
            {optionsWithImages.map((option) => (
              <li key={option.label}>
                <label>
                  <div className="image-container">
                    <input
                      type="radio"
                      value={option.label}
                      checked={answer === option.label}
                      onChange={handleInputChange}
                    />

                    <img src={`/images/${option.image}`} alt={option.label} className="image-small" />
                    <span className="name">{option.label}</span>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Question;