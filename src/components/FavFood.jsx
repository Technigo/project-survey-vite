import React from 'react'

export const FavFood = ({ updateFormData, value }) => {
    const favFood = (event) => updateFormData("favFood", event.target.value);

    return (
        <div>
            <label>What is your favourite food?</label>
            <input type="text" value={value} onChange={favFood} />
        </div>
    )
}
