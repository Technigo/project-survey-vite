import { useState } from "react";
import "./DropdownType.css";

export const DropdownType = ({ question, handleDropDownChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleDropDownChange(option);
    setIsOpen(false);
  };

  const handleOpenOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="input-section">
      <div className="question-area">
        <p>{question.questionText}</p>
      </div>

      <div className="option-area">
        <button
          className="dropdown-btn"
          type="button"
          onClick={handleOpenOptions}
        >
          Select your dream home location
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            {question.options.map((option) => (
              <li
                key={option.id}
                value={option.optionText}
                onClick={() => handleOptionClick(option.optionText)}
              >
                {option.optionText}
              </li>
            ))}
          </ul>
        )}
        {selectedOption && (
          <p>
            Your selection: <span>{selectedOption}</span>
          </p>
        )}
      </div>
    </section>
  );
};
