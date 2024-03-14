// here we import the useState from react, so we can use it to update the mode to "summary" when the form is submitted.
// https://legacy.reactjs.org/docs/hooks-state.html
import React, { useState } from "react";
export const App = () => {
  // here we created a varible. so we can update mode  to "summary" when the form is submitted.
  //here we create varibles.
  const [mode, setMode] = useState("form");
  // here we created a varible. so we can update bestThing to the value of the input field.
  const [bestThing, setBestThing] = useState("");
  const [niceThings, setNiceThings] = useState("");
  const [definesYou, setDefinesYou] = useState("");
  // const holdDate is a function that takes an event as an argument//store the date user has put to the input field.
  //Here we create a function that takes an event as an argument.
  const onChange = (event) => {
    // here we update the bestThing to the value of the input field.
    //here we are calling the function.
    setBestThing(event.target.value);
  };

  // here we call the function that is going to run when the radiobuttons are clicked.
  const onOptionChange = (event) => {
    setNiceThings(event.target.value);
  };

// here we call the function that is going to run when the dropdown is clicked.
  const onDropdownChange = (event) => {
    setDefinesYou(event.target.value); 
    };

  const onSubmit = (event) => {
    // here we create the varible for the funtion that prevent the page from refreshing when hit submit button.
    event.preventDefault();
    // here we update the mode to "summary"
    setMode("summary");
  };

  return (
    <div>
      <header>
        <h1>What's the best you?</h1>
      </header>
      {/* Similar to "if statement, called conditional rendering" https://legacy.reactjs.org/docs/conditional-rendering.html */}
      {mode == "form" && (
        <form onSubmit={onSubmit}>
          {" "}
          {/* here we register the function (event handler) */}
          <div>
            {/* "for" and "id" has to match, it's for accessabiliy  */}
            {/* use "htmlfor", otherwise you will get a warning in the console log.  */}
            <label htmlFor="bestThing">
              1. What's the best thing about you?
            </label>
            <input
              type="text"
              id="bestThing"
              name="bestThing"
              onChange={onChange}
            />
          </div>
          {/* https://stackoverflow.com/questions/13273806/using-the-html-label-tag-with-radio-buttons "radiogroup" is a accessibility thing to tell that now a group of radiobuttons that belongs together, will be coming*/}
          <div role="radiogroup" aria-labelledby="radioGroupLabel">
            <div id="radioGroupLabel">
              2. Do you often say nice things to people?
            </div>
            <div>
              <input
                type="radio"
                id="yes"
                name="niceThings"
                value="yes"
                onChange={onOptionChange}
              />
              <label htmlFor="yes">Yes</label>
            </div>

            <div>
              <input
                type="radio"
                id="no"
                name="niceThings"
                value="no"
                // here we tell react to call the function when the radio button is clicked.
                onChange={onOptionChange}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div>
            <label htmlFor="definesYou">
              3. What defines you as a person?
            </label>
            <select id="definesYou" name="definesYou" onChange={onDropdownChange}>
              <option value="kindness">I'm kind</option>
              <option value="honesty">I lie to be nice</option>
              <option value="loyalty">I'm loyal</option>
              <option value="respect">I'm fun</option>
              </select>
          </div>
          <div>
            {/* input is the same thing as button. */}
            <input type="submit" value="Submit" />
          </div>
        </form>
        // This is the end of the form/conditional rendering
      )}
      {mode == "summary" && (
        <div>
          {bestThing} {niceThings} {definesYou}
        </div>
      )}
    </div>
  );
};
