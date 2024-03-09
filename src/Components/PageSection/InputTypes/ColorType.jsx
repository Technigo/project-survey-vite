export const ColorType = ({question, handleChange}) => {

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