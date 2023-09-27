import { useState } from "react";

export const LivingArea = () => {
    /* Initialize a state for the dropdown list of the environment question */
    const [livingArea, setLivingArea] = useState("null");

    /* Update the state of the environment based on the user's selected option */
    const updateLivingArea = (e) => {
        setLivingArea(e.target.value);
    }

    return (
        <div className="living-area">
            <label>
                Which area do you live in?
                <select value={livingArea} onChange={updateLivingArea}>
                    <option value="select" disabled selected>Please select one option</option>
                    <option value="city">In the city</option>
                    <option value="countryside">In the countryside</option>
                </select>
            </label>
        </div>
    )
}
