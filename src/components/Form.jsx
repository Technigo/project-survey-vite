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
    if (name !== "" && flavor !== "" && cupOrCone !=="") {
      setSubmit(submit ? "false" : "true");}
    else {
      console.log ("Mandatory fields are not filled in")
    }
  };
  
  if (submit === "true") {
    return (
      <div>
        <Answers
          name={data[0]}
          flavor={data[1]}
          cupOrCone={data[2]}
          toppings={data[3]}
        />
      </div>
    );
  } else {
    return (
      <div className="form-questions">
        <p>Hello! Do you want to tell us about your favorite ice cream?</p>
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
          <div className="question">
            <label>
              Do you prefer cup or cone?
              <input
                type="radio"
                value="cup"
                onChange={(event) => setCupOrCone(event.target.value)}
                checked={cupOrCone === "cup"}
                name="cupOrCone"
                required
              />
              Cup
              <input
                type="radio"
                value="cone"
                onChange={(event) => setCupOrCone(event.target.value)}
                checked={cupOrCone === "cone"}
                name="cupOrCone"
              />
              Cone
            </label>
          </div>
          <div className="question">
            <label>
              {" "}
              Do you prefer your ice cream plain or with any toppings? Choose the
              ones you like:
              <input
                type="checkbox"
                checked={withSauce}
                onChange={(event) => setWithSauce(event.target.checked)}
              />{" "}
              Sauce
              <input
                type="checkbox"
                checked={withSprinkles}
                onChange={(event) => setWithSprinkles(event.target.checked)}
              />{" "}
              Sprinkles
            </label>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
};
