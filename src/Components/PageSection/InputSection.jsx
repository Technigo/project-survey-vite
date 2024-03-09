import { DropdownType } from "./InputTypes/DropdownType"
import { ColorType } from "./InputTypes/ColorType"

export const InputSection = ({question, index, setOptionSummary}) =>{
//a property should be passed in here to decide which question id it is, so the correct option can be selected


    return (
        <>
            { index === 0 && 
                <DropdownType question={question} setOptionSummary={setOptionSummary} index={index}/>
            }

            { index === 1 && 
                <ColorType question={question} setOptionSummary={setOptionSummary} index={index}/>
            }
        </>
    )
}