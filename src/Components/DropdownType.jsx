import { useState } from "react"

export const DropdownType = ({question, handleDropDownChange}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) =>{
        setSelectedOption(option);
        handleDropDownChange(option);
        setIsOpen(false);
    }

    const handleOpenOptions = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <section className={`input-section ${question.id}`}>
            <p>{question.questionText}</p>
            <button type="button" onClick={handleOpenOptions}>
                Select your dream home
            </button>
            {isOpen && (
                <ul>
                    {question.options.map((option)=>(
                        <li 
                            key={option.id} 
                            value={option.optionText} 
                            onClick={()=>handleOptionClick(option.optionText)}>
                             {option.optionText}
                        </li>
                        ))}
                </ul>
            )}
            {selectedOption && (
            <p>You choose: <span>{selectedOption}</span></p>
            )}
        </section>
    )
}