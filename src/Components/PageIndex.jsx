import { useState } from "react"
import data from "../Data/questionList.json"
import { InputSection } from "./PageSection/InputSection"
import { Summary } from "./PageSection/Summary"

export const PageIndex = () =>{

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState (0);
    const [optionSummary, setOptionSummary] = useState([]);

    const handleNextQuestion = () =>{
        setCurrentQuestionIndex((prevIndex)=>prevIndex+1);
    }
    
    const handlePreviousQuestion = () =>{
        setCurrentQuestionIndex((prevIndex)=>prevIndex-1);
    }

    const currentQuestion = data.questions[currentQuestionIndex];
    
    const handleOptionSummary = (value) => {
      const updatedOptionSummary = [...optionSummary];

      updatedOptionSummary[currentQuestionIndex] = value;

      setOptionSummary(updatedOptionSummary);
       
    }


    return (
        //send out correct data from here
        <>
            <form>
                <InputSection question={currentQuestion} index={currentQuestionIndex} setOptionSummary={handleOptionSummary} />

                {currentQuestionIndex > 0 && <button type="button" onClick={handlePreviousQuestion}>Previous question</button>}

                {currentQuestionIndex <= (data.questions.length - 2) && <button type="button" onClick={handleNextQuestion}>Next question</button>}

                {currentQuestionIndex === (data.questions.length - 1) && <button type="submit">Submit</button>}
            </form>
            <Summary optionSummary={optionSummary} index={currentQuestionIndex}/>
        </>
    )
}