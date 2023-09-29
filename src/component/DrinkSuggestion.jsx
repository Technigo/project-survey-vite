import { DataOfDrinks } from "./DataOfDrinks";

export const DrinkSuggestion = () => {
  let drinkSuggestionObject = DataOfDrinks[0];

  return (
    <>
      <div className="the-drink">
        <img
          className="the-drink-pic"
          src={drinkSuggestionObject.drinkPicURL}
        />
        <h2>{drinkSuggestionObject.name.toUpperCase()}</h2>
      </div>
    </>
  );
};
