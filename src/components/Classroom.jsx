import React from 'react'

export const Classroom = ({ updateFormData, value }) => {

    const childsclass = (event) =>
        updateFormData("classroom", event.target.value);

    return (
        <div className="class">
            <img src="/assets/class-transparent.png" alt="Class"></img>
            <label>What class are you in? </label>

            <select value={value} onChange={childsclass}>
                <option disabled={true} value="">Choose here....</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
            </select>
        </div>
    );
};
