export const RadioType = ({index, question, handleChange, handleVisitor}) => {

    if(index === 5){
        return (
        <fieldset className={`input-section ${question.id}`}>
            <legend>{question.questionText}</legend>
                <div className="option-secton">
                {
                    question.options.map((option)=>(
                        <div key={option.id} className="each-option">
                            <input 
                            type="radio" 
                            id={option.id} 
                            name={question.id} 
                            value={option.optionText}
                            onChange={handleChange}
                            />
                            <label htmlFor="{option.id}">{option.optionText}</label>
                        </div>
                    ))
                }
                </div>
        </fieldset>
        )
    }else{
        return(
        <fieldset className={`input-section ${question.id}`}>
             <legend>{question.questionText}</legend>
                  <div className="option-secton">
                 {
                     question.options.map((option)=>(
                        <div key={option.id} className="each-option">
                            <input 
                            type="radio" 
                            id={option.id} 
                            name={question.id} 
                            value={option.optionText}
                            onChange={(event)=>handleVisitor(event.target.value)}
                            />
                            <label htmlFor="{option.id}">{option.optionText}</label>
                        </div>
                ))
            }
                </div>
        </fieldset>
        )
    }

}