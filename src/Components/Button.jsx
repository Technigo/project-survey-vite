export const Button = ({handleNextQuestion, handlePreviousQuestion,currentQuestionIndex, lastQuesionIndex, isStranger}) =>{

    const removLastQuestion = lastQuesionIndex - 1;

    return (
        <section className="button-section">
            {isStranger? (
                <>
                    {(currentQuestionIndex > 0 && currentQuestionIndex <= removLastQuestion) && 
                    (
                        <button type="button" onClick={handlePreviousQuestion}>
                            Previous
                        </button>
                    )}

                    {currentQuestionIndex <= lastQuesionIndex && 
                    (
                    <button type="button" onClick={handleNextQuestion}>
                        Next
                    </button>
                    )}
            
                    {currentQuestionIndex > lastQuesionIndex && 
                    (<button type="submit" >
                        Submit
                    </button>)}
                </>
                ) : (
                    <>
                        {(currentQuestionIndex > 0 && currentQuestionIndex <= removLastQuestion) && 
                        (
                            <button type="button" onClick={handlePreviousQuestion}>
                                Previous
                            </button>
                        )}

                        {currentQuestionIndex <= removLastQuestion && 
                        (
                            <button type="button" onClick={handleNextQuestion}>
                                Next
                            </button>
                        )}

                        {currentQuestionIndex > removLastQuestion && 
                        (
                            <button type="submit" >
                                Submit
                            </button>
                        )}
                    </>
                )
            }
        </section>
    )}