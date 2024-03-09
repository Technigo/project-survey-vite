export const ColorType = ({question, index,setOptionSummary}) => {

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
                    type="color" 
                    id={question.id} 
                    name={question.id} 
                    onChange={handleChange}
                />
              
        </section>
        
    )
}