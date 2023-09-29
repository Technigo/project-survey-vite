import React from 'react'

export const FavFood = ({ updateFormData, value }) => {
    const favFood = (event) => updateFormData("favFood", event.target.value);

    return (
        <div class="food">

            <div class="food-img">
                <img src="public/assets/pizza.png" alt="Pizza"></img>
                <img src="public/assets/salad.png"></img>
                <img src="public/assets/spaghetti.png"></img>
                <img src="public/assets/vegetables.png"></img></div>


            <div class="foods-txt">
                <label>What is your favourite food?</label>

                <input type="text" value={value} onChange={favFood} /></div>
        </div>
    )
}
