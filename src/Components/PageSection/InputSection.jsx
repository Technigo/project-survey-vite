import { DropdownType } from "./InputTypes/DropdownType"
import { ColorType } from "./InputTypes/ColorType"
import { RangeType } from "./InputTypes/RangeType"
import { RadioType } from "./InputTypes/RadioType"
import { CheckboxType } from "./InputTypes/CheckboxType"
import { useState } from "react"

export const InputSection = ({question, index, handleOptionSummary, handleVisitor, isStranger}) =>{

    const [featureArr, setFeatureArr] = useState([]);

    const handleDropDownChange = (value)=>{
        console.log('Index:', index); 
        console.log('Selected Option:', value); 
        handleOptionSummary(value);
    }

    const handleChange = (event)=>{
        const value = event.target.value;
        console.log('Index:', index); 
        console.log('Selected Option:', value); 
        handleOptionSummary(value);
    }

    const handleChecked = (value)=>{
        const updatedFeatureArr = [...featureArr, value];
        setFeatureArr(updatedFeatureArr);
        handleOptionSummary(updatedFeatureArr);
    }

    const handleUncheck = (value)=>{
        const updatedFeatureArr = featureArr.filter((item) => item !== value);
        handleOptionSummary(updatedFeatureArr);
    }

    return (
        <>
            { index === 0 && 
                <DropdownType question={question} handleDropDownChange={handleDropDownChange}/>
            }

            { index === 1 && 
                <ColorType question={question} handleChange={handleChange} />
            }
            
            { index === 2 && 
                <CheckboxType question={question} handleChecked={handleChecked} handleUncheck={handleUncheck}handleChange={handleChange}/>
            }

            { index === 3 && 
                <RangeType question={question} handleChange={handleChange}/>
            }

            { index === 4  && 
                <RadioType index={index} question={question} handleVisitor={handleVisitor}/>
            }
            
            {  (isStranger===true && index === 5) && 
                <RadioType index={index} question={question} handleChange={handleChange}/>
            }
        </>
    )
}