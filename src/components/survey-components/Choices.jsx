import { useState } from "react";
import { toppings } from "./toppings.js";
import "../../index.css";

export const Choices = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

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
  };

  return (
    <div className="question">
      <h2>2. Select all acceptable pizza toppings:</h2>
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
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                {/* <div className="right-section">{score}</div> */}
              </div>
            </li>
          );
        })}
        <div className="toppings-list-item">
          <div className="toppings-selected">
            <p>You selected: {/* Add selected items here. */}</p>
          </div>
          <div className="right-section">
            Your total degenerate score: {total}
          </div>
        </div>
      </ul>
    </div>
  );
};
