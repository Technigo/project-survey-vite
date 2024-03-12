import { useState } from "react"
import data from "../Data/questionList.json"
import { InputSection } from "./PageSection/InputSection"
import { Button } from "./Button"
import { Summary } from "./PageSection/Summary"

export const PageIndex = () =>{

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState (0);
    const [optionSummary, setOptionSummary] = useState([]);
    const [isStranger, setIsStranger]=useState(false);

    const handleNextQuestion = () =>{
        setCurrentQuestionIndex((prevIndex)=>prevIndex+1);
    }
    
    const handlePreviousQuestion = () =>{
        setCurrentQuestionIndex((prevIndex)=>prevIndex-1);
    }

    const handleOptionSummary = (value) => {
        console.log(value);
        const updatedOptionSummary = [...optionSummary];
        updatedOptionSummary[currentQuestionIndex] = value;
        setOptionSummary(updatedOptionSummary);
    }

    const handleVisitor = (value) =>{
        const updatedVisitorState = value === "A total stranger for a surprise"? true:false
        setIsStranger(updatedVisitorState);
        handleOptionSummary(value);
    }

    const currentQuestion = data.questions[currentQuestionIndex];
    const lastQuesionIndex = data.questions.length-1;

    return (
        <>
            <form>
                <InputSection 
                    question={currentQuestion} 
                    index={currentQuestionIndex} 
                    optionSummary={optionSummary}
                    setOptionSummary={setOptionSummary}
                    handleOptionSummary={handleOptionSummary}
                    handleVisitor={handleVisitor}
                    isStranger={isStranger}
                 />

                <Button 
                    handleNextQuestion={handleNextQuestion}
                    handlePreviousQuestion ={handlePreviousQuestion}
                    currentQuestionIndex={currentQuestionIndex}
                    lastQuesionIndex={lastQuesionIndex}
                    isStranger={isStranger}
                />

                <Summary 
                    optionSummary={optionSummary} 
                    index={currentQuestionIndex}
                />
            </form>
           
        </>
    )
}