import React from "react";

const RadioButton = ({ radioChecked, setRadioChecked }) => {
    <div>
        <label>
            <input
                type="radio"
                value="Joey"
                onChange={(event) => setRadioChecked(event.target.value)}
                checked={radioChecked === "yes"}
            />
            Joey
        </label>
    </div>
}

export default RadioButton; 