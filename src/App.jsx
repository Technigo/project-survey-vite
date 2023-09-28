import { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import { Name, Email } from "./components/Signup";
import Selection from "./components/Selection";

export const App = () => {
  // This will act as "database" for our form where we store our values to pass them to the components.
  const [form, setForm] = useState({
    name: "",
    email: "",
    yearsPickingMushrooms: "",
    favoriteMushroom: "option0",
    prepareMushroom: "",
  });

  // Sets a value in our form based on the name property of our target input.

  // const setFormValue = (name, value) => {
  //   setForm((prev) => ({ ...prev, [name]: value }));
  // };
  const setFormValue = (event) => {
    const { name, value } = event.target;
    // console.log(event.target);
    setForm({ ...form, [name]: value });
  };
  console.log(form);
  const [step, setStep] = useState("form");

  const goToSummary = () => setStep("summary");

  return (
    <Container>
      {step === "form" && (
        <>
          <Card>
            <h1>Welcome to our mushroom survey!</h1>
            <p>
              In this survey we would like you to answer a couple of questions
              regarding mushrooms.
            </p>
            <img src="/mushroom.jpg"></img>
            {/* <input/>
            <input/> */}
            <Name name="name" value={form.name} onChange={setFormValue} />
            <Email name="email" value={form.email} onChange={setFormValue} />
          </Card>

          <Card>
            <p></p>
            <input name="test" type="radio" />
            <input name="test" type="radio" />
            <input name="test" type="radio" />
          </Card>

          <Card>
            <p>What's your favourite mushroom?</p>
            {/* <select>
              <option>1</option>
              <option>2</option>
            </select> */}
            <Selection
              name="favoriteMushroom"
              value={form.favoriteMushroom}
              onChange={setFormValue}
            />
          </Card>

          <Card>
            <p></p>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </Card>

          <button onClick={goToSummary}>Submit</button>
        </>
      )}
      {step === "summary" && (
        <p>
          Hej - {form.name}- {form.email}- {form.favoriteMushroom}
        </p>
      )}
    </Container>
  );
};
