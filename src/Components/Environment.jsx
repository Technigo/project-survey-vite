import { useState } from "react";

export const Environment = () => {
    /* Initialize a state for the dropdown list of the environment question */
    const [environment, setEnvironment] = useState("null");

    /* Update the state of the environment based on the user's selected option */
    const updateEnvironment = (e) => {
        setEnvironment(e.target.value);
    }

    return (
        <div className="environment">
            <label>
                In which environment do you live?
                <select value={environment} onChange={updateEnvironment}>
                    <option value="" disabled selected>Please select one option</option>
                    <option value="city">In the city</option>
                    <option value="countryside">In the countryside</option>
                </select>
            </label>
        </div>
    )
}
