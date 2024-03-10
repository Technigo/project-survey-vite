import { DropdownType } from "./InputTypes/DropdownType"
import { ColorType } from "./InputTypes/ColorType"
import { DragType } from "./InputTypes/DragType"
import { RangeType } from "./InputTypes/RangeType"
import { RadioType } from "./InputTypes/RadioType"

export const InputSection = ({question, index, setOptionSummary}) =>{
//a property should be passed in here to decide which question id it is, so the correct option can be selected

const handleDropDownChange = (value)=>{
    console.log('Index:', index); 
    console.log('Selected Option:', value); 
    setOptionSummary(value);
}

const handleChange = (event)=>{
    const value = event.target.value;
    console.log('Index:', index); 
    console.log('Selected Option:', value); 
    setOptionSummary(value);
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
                <DragType question={question} handleChange={handleChange}/>
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