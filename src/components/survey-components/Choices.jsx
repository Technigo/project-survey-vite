import { useState } from "react";
import PropTypes from "prop-types";
import { toppings } from "./toppings.js";
import "./choices.css";

export const Choices = ({ setDisplayChoices }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);
  const [totalName, setTotalName] = useState([]);

  const handleOnChange = (position, name) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    console.log(name);

    const selectedToppings = updatedCheckedState.reduce(
      (sumName, currentState, index) => {
        if (currentState) {
          return sumName.concat(toppings[index].name);
        }
        return sumName;
      },
      []
    );

    const formattedTotalName = selectedToppings.join(", ");
    setTotalName(formattedTotalName);

    const totalScore = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].score;
        }
        return sum;
      },
      0
    );

    setTotal(totalScore);
    setDisplayChoices(totalScore);
  };

  return (
    <div className="question">
      <h3>2. What are the most disgusting pizza toppings?</h3>
      <div className="headline">
        <h3>Toppings:</h3>
        <h3>Disgust points</h3>
      </div>
      <ul className="toppings-list">
        {toppings.map(({ name, score }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index, name)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{score}</div>
              </div>
            </li>
          );
        })}
        <div className="toppings-result">
          <div className="toppings-selected">
            <p>
              <span>Toppings of your choice:</span>
              {totalName}
            </p>
          </div>
          <div className="score-section">
            <p>
              <span>Your total score:</span>
              {total} disgust points
            </p>
          </div>
        </div>
      </ul>
    </div>
  );
};
Choices.propTypes = {
  setDisplayChoices: PropTypes.func,
};
