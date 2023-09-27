// Här kan vi lägga in alla components för att sen ha <Form /> i App.jsx 


import React, { useState } from "react";
import RadioButton from "./RadioButton";

const Form = () => {
    const [radioChecked, setRadioChecked] = useState("");

    if (step === 1) {
        return (
            <div>
                <RadioButton
                    radioChecked={radioChecked}
                    setRadioChecked={setRadioChecked}
                />
                <button onClick={() => setStep(step + 1)}>Sashay to next</button>
            </div>
        );

    }

    export default Form; 