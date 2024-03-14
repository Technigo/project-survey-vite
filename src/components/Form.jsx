import { useState } from "react";

import { Answers } from "./Answers.jsx";

export const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [flavor, setFlavor] = useState("");
  const [cupOrCone, setCupOrCone] = useState("");
  const [withSauce, setWithSauce] = useState(false);
  const [withSprinkles, setWithSprinkles] = useState(false);
  let toppings = "";
  if (withSauce === false && withSprinkles === false) {
    toppings = "plain";
  } else if (withSauce === true && withSprinkles === false) {
    toppings = "sauce";
  } else if (withSauce === false && withSprinkles === true) {
    toppings = "sprinkles";
  } else {
    toppings = "both";
  }

  let data = [`${name}`, `${flavor}`, `${cupOrCone}`, `${toppings}`];

  let handleSubmit = () => {
    if (name !== "" && flavor !== "" && cupOrCone !== "") {
      setSubmit(submit ? "false" : "true");
    } else {
      console.log("Mandatory fields are not filled in");
    }
  };

  const startOver = () => {
    setName ("")
    setFlavor ("")
    setCupOrCone ("")
    setWithSauce (false)
    setWithSprinkles (false)
    setSubmit (false)
  };

  if (submit === "true") {
    return (
      <div className="answer-field">
        <Answers
          name={data[0]}
          flavor={data[1]}
          cupOrCone={data[2]}
          toppings={data[3]}
        />
        <button onClick={startOver} className="button">
          Start over!
        </button>
      </div>
    );
  } else {
    return (
      <div className="form-questions">
        <h1>Hello there!</h1>
        <p>Do you want to tell us about your favorite ice cream?</p>
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="question">
            <label>
              {" "}
              What is your name?
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name}
                placeholder="Write your name here"
                required
                className="text-field"
              />
            </label>
          </div>
          <div className="question">
            <label>
              {" "}
              What flavor of ice cream do you prefer?
              <select
                onChange={(event) => setFlavor(event.target.value)}
                value={flavor}
                required
                className="dropdown-menu"
              >
                <option hidden value="">
                  Choose an option:
                </option>
                <option value="chocolate">Chocolate 🍫</option>
                <option value="strawberry">Strawberry 🍓</option>
                <option value="vanilla">Vanilla 🍦</option>
              </select>
            </label>
          </div>
          <div className="multiple-question">
            <p> Do you prefer cup or cone?</p>
            <div className="multiple-choice">
              <label className="radio-field">
                <input
                  type="radio"
                  value="cup"
                  onChange={(event) => setCupOrCone(event.target.value)}
                  checked={cupOrCone === "cup"}
                  name="cupOrCone"
                  required
                  className="radio-button"
                />
                <span className="radio-box"></span>
              </label>
              Cup
              <label className="radio-field">
                <input
                  type="radio"
                  value="cone"
                  onChange={(event) => setCupOrCone(event.target.value)}
                  checked={cupOrCone === "cone"}
                  name="cupOrCone"
                  className="radio-button"
                />
                <span className="radio-box"></span>
              </label>
              Cone
            </div>
          </div>
          <div className="multiple-question">
            <p>
              Do you prefer your ice cream plain or with any toppings? <br></br>
              Choose the ones you like:
            </p>
            <div className="multiple-choice">
              <label className="check-box-field">
                <input
                  type="checkbox"
                  checked={withSauce}
                  onChange={(event) => setWithSauce(event.target.checked)}
                  className="checkbox"
                />
                <span className="checkmark"></span>
              </label>{" "}
              Sauce
              <label className="check-box-field">
                <input
                  type="checkbox"
                  checked={withSprinkles}
                  onChange={(event) => setWithSprinkles(event.target.checked)}
                  className="checkbox"
                />
                <span className="checkmark"></span>
              </label>{" "}
              Sprinkles
            </div>
          </div>
          <button type="submit" onClick={handleSubmit} className="button">
            Submit
          </button>
        </form>
      </div>
    );
  }
};
