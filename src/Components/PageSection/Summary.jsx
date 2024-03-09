export const Summary = ({optionSummary, index}) =>{ 
    console.log(optionSummary);
    console.log(index);

    return (
        <section className="summary-section">
            
            { 
                optionSummary.map((option, index)=>(
                    <p key={index}>{option}</p>
                ))
              
            } 
        </section>
    )
}