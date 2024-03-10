import { DropdownType } from "./InputTypes/DropdownType"
import { ColorType } from "./InputTypes/ColorType"
import { RangeType } from "./InputTypes/RangeType"
import { RadioType } from "./InputTypes/RadioType"

export const InputSection = ({question, index, handleOptionSummary}) =>{

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


    return (
        <>
            { index === 0 && 
                <DropdownType question={question} handleDropDownChange={handleDropDownChange}/>
            }

            { index === 1 && 
                <ColorType question={question} handleChange={handleChange}/>
            }
            
            { index === 2 && 
                <RadioType question={question} handleChange={handleChange}/>
            }

            { index === 3 && 
                <RangeType question={question} handleChange={handleChange}/>
            }
            { (index === 4 || index === 5) && 
                <RadioType question={question} handleChange={handleChange}/>
            }
        </>
    )
}