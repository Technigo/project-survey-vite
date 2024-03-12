// here we import the useState from react, so we can use it to update the mode to "summary" when the form is submitted.
// https://legacy.reactjs.org/docs/hooks-state.html
import React, { useState } from 'react';
export const App = () => {
  // here we created a varible. so we can update mode  to "summary" when the form is submitted.
  const [mode, setMode] = useState("form");
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
   
      <form onSubmit={onSubmit}>      {/* here we register the function (event handler) */}

        <div>
          {/* "for" and "id" has to match, it's for accessabiliy  */}
          <label for="bestThing">What's the best thing about you?</label>
          <input type="text" id="bestThing" name="bestThing" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
      // This is the end of the form/conditional rendering
      )}
      {mode == "summary" && <div>summary</div>}

    </div>
  );
};
