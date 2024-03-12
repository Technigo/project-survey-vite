export const RangeType = ({question, handleChange}) => {

    return (
        <section className={`input-section ${question.id}`}>
            <label htmlFor={question.id}>{question.questionText}</label>
            <p>Not important at all</p>
                <input 
                    type="range" 
                    id={question.id} 
                    name={question.id} 
                    min="0" max="10"
                    onChange={handleChange}
                />
            <p>Very important</p>
            
        </section>
    )
}