export const RadioType = ({question, handleChange}) => {

    return (
        <section className={`input-section ${question.id}`}>
            <label htmlFor={question.id}>{question.questionText}</label>
                <input 
                    type="radio" 
                    id={question.id} 
                    name={question.id} 
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