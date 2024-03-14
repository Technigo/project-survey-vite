// here we import the useState from react, so we can use it to update the mode to "summary" when the form is submitted.
// https://legacy.reactjs.org/docs/hooks-state.html
import React, { useState } from "react";
export const App = () => {
  // here we created a varible. so we can update mode  to "summary" when the form is submitted.
  const [mode, setMode] = useState("form");
  // here we created a varible. so we can update bestThing to the value of the input field.
  const [bestThing, setBestThing] = useState("");
  // const holdDate is a function that takes an event as an argument//store the date user has put to the input field.
  const onChange = (event) => {
    console.log(event.target.value);
    // here we update the bestThing to the value of the input field.
    setBestThing(event.target.value);
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
          <div>
            <input type="submit" value="Submit" />
          </div>
          <div>
            <label htmlFor="bestThing">
              2. Do you often say nice things to people?
            </label>
            <div>
              <input type="radio" id="yes" name="niceThings" value="yes" checked />
              <label for="yes">Yes</label>
            </div>

            <div>
              <input type="radio" id="no" name="niceThings" value="no" />
              <label for="no">No</label>
            </div>
          </div>
        </form>
        // This is the end of the form/conditional rendering
      )}
      {mode == "summary" && <div>{bestThing}</div>}
    </div>
  );
};
