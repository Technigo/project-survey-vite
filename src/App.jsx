// here we import the useState from react, so we can use it to update the mode to "summary" when the form is submitted.
// https://legacy.reactjs.org/docs/hooks-state.html
import React, { useState } from "react";
import { Summary } from "./Summary";
import { Form } from "./Form";
import { Header } from "./Header";

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
  const onTextChange = (event) => {
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
    <>
      <Header />

      {/* Similar to "if statement, called conditional rendering" https://legacy.reactjs.org/docs/conditional-rendering.html */}
      {mode == "form" && (
        <Form
          onTextChange={onTextChange}
          onOptionChange={onOptionChange}
          onDropdownChange={onDropdownChange}
          onSubmit={onSubmit}
        />
      )}

      {mode == "summary" && (
        <Summary
          bestThing={bestThing}
          niceThings={niceThings}
          definesYou={definesYou}
        />
      )}
    </>
  );
};
