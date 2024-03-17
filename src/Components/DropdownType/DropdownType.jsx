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

      <div className="dropdown-option-area">
        <button
          className="dropdown-btn"
          type="button"
          onClick={handleOpenOptions}
        >
          {selectedOption ? selectedOption : "Select your dream home location"}
        </button>
        <div className="dropdown-list">
          <div className={`dropdown-area ${isOpen ? "open" : ""}`}>
            {isOpen && (
              <ul>
                {question.options.map((option) => (
                  <li
                    className="location-option"
                    key={option.id}
                    value={option.optionText}
                    tabIndex={0}
                    onClick={() => handleOptionClick(option.optionText)}
                  >
                    {option.optionText}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
