import React from "react";

const RadioButton = ({ radioChecked, setRadioChecked }) => {
    <div className="radioForm">
        <form onSubmit={(event) => event.preventDefault()}>
            <label>
                <input
                    type="radio"
                    value="Joey"
                    onChange={(event) => setRadioChecked(event.target.value)}
                    checked={radioChecked === "yes"}
                />
                Joey
            </label>
        </form>
    </div>
}

export default RadioButton; 