import { useState } from "react"

export const First = () => {
    const [first, setFirst] = useState("")

    const onRadioChange = (e) => {
        setFirst(e.target.value)
    }


  return (

    <div className="radio-question">
      <label htmlFor="">
        When you finally sit down to do you your to-do list, how often do you end up rearranging your desk instead?</label>

        <label htmlFor="everytime">Every Time! A clean desk is a productive desk, right?
        <input type="radio"
         name="everytime" 
         id="everytime"
         value={"Every Time! A clean desk is a productive desk, right?"}
         checked={first === "Every Time! A clean desk is a productive desk, right?"}
         onChange={onRadioChange}
        />
        </label>
        <label htmlFor="occasionally">Occasionally, if something shiny distracts me.
        </label>
        <input type="radio"
         name="occasionally"
         id="occasionally"
         value={"Occasionally, if something shiny distracts me"}
         checked={first === "Occasionally, if something shiny distracts me"}
         onChange={onRadioChange}
        />
        <label htmlFor="rarely">Rarely, I'm all about efficiency.
        <input type="radio"
        name="rarely"
        id="rarely"
        value={"Rarely, I'm all about efficiency."}
        checked={first === "Rarely, I'm all about efficiency."}
        onChange={onRadioChange}
        />
        </label>
        <label htmlFor="no">Wait, was I supposed to have a to-do list?
        <input type="radio"
        name="no"
        id="no"
        value={"Wait, was I supposed to have a to-do list?"}
        checked={first === "Wait, was I supposed to have a to-do list?"}
        onChange={onRadioChange}
        />
        </label>
    </div>
  )
}

