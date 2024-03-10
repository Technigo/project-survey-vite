import { useState } from "react"

export const DropdownType = ({question, handleDropDownChange}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={`input-section ${question.id}`}>
            <p>{question.questionText}</p>
                <button type="button" onClick={()=>setIsOpen(!isOpen)}>Selec your dream home</button>
                {isOpen && (
                    <ul>
                        {question.options.map((option)=>(
                            <li 
                                key={option.id} 
                                value={option.optionText} 
                                onClick={()=>handleDropDownChange(option.optionText)}>
                                {option.optionText}
                            </li>
                        ))}
                    </ul>
                )}

               
        </section>
    )
}