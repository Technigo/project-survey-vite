import React from 'react'

export const FavFood = ({ updateFormData, value }) => {
    const favFood = (event) => updateFormData("favFood", event.target.value);

    return (
        <div class="food">

            <div class="food-img">
                <img src="/assets/pizza.png" alt="Pizza"></img>
                <img src="/assets/salad.png"></img>
                <img src="/assets/spaghetti.png"></img>
                <img src="/assets/vegetables.png"></img></div>


            <div class="foods-txt">
                <label>What is your favourite food?</label>

                <input type="text" value={value} onChange={favFood} /></div>
        </div>
    )
}
