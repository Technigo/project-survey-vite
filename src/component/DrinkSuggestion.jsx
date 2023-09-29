/* eslint-disable react/prop-types */
import { DataOfDrinks } from "./DataOfDrinks";

export const DrinkSuggestion = ({ age, preference, spirit }) => {

    //Takes all dataOfDrinks and filters out a correct match, first from the right spirit and then to the right glass-type. This works because we only have one match per combination but if we had more we would have to add some sort of randomizer as well
    let spiritMatch = DataOfDrinks.filter((item)=> (item.spirit === spirit))
    let chosenDrink = spiritMatch.filter((item)=>(item.glassType === preference))


    if (age < 18) return (
        <>
            <div className="the-drink">
                <img className="the-drink-pic" src={chosenDrink[12].drinkPicURL} alt="picture of drink" />
                <h2>{chosenDrink[12].name.toUpperCase()}</h2>
            </div>
        </>
    )

    return (
        <>
            <div className="the-drink">
                <img className="the-drink-pic" src={chosenDrink[0].drinkPicURL} alt="picture of drink" />
                <h2>{chosenDrink[0].name.toUpperCase()}</h2>
            </div>
        </>
    )
}