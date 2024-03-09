export const DropdownType = ({question, handleChange}) => {


    return (
        <section className={`input-section ${question.id}`}>
            <label htmlFor={question.id}>{question.questionText}</label>
                <input 
                    type="text" 
                    id={question.id} 
                    name={question.id} 
                    list={`${question.id}-list`}
                    placeholder="Choose your dream home"
                    onChange={handleChange}
                />
                <datalist id={`${question.id}-list`}>
                    {question.options.map((option) => (
                        <option key={option.id} value={option.optionText} />
                    ))}
                </datalist>
        </section>
    )
}