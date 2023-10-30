export const FavFood = ({ updateFormData, value }) => {
  const favFood = (event) => updateFormData("favFood", event.target.value);

  return (
    <div className="food-container">
      <div className="food-img">
        <ul className="food-list">
          <li>
            <img src="/assets/pizza.png" alt="Pizza" />
          </li>
          <li>
            <img src="/assets/salad.png" />
          </li>
          <li>
            <img className="disappear-inmobile" src="/assets/spaghetti.png" />
          </li>
          <li>
            <img className="disappear-inmobile" src="/assets/vegetables.png" />
          </li>
        </ul>
      </div>
      <div className="foods-txt">
        <label>What is your favourite food?</label>
        <input type="text" value={value} onChange={favFood} />
      </div>
    </div>
  );
};
