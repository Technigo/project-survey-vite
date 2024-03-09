export const DropdownType = ({question, index,setOptionSummary}) => {

    const handleChange = (event)=>{
        const value = event.target.value;
        console.log('Index:', index); 
        console.log('Selected Option:', value); 
        setOptionSummary(value);
    }

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