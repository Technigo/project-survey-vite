import { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Signup from "./components/Signup";
import Selection from "./components/Selection";

export const App = () => {
  // This will act as "database" for our form where we store our values to pass them to the components.
  const [form, setForm] = useState({
    name: "",
    yearsPickingMushrooms: "",
    favoriteMushroom: "",
    prepareMushroom: "",
  });

  // Sets a value in our form based on the name property of our target input.
  const setFormValue = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
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
            <input name="name" value={form.name} onChange={setFormValue} />
          </Card>

          <Card>
            <p>How many years have you been picking mushrooms?</p>
            <input
              name="yearsPickingMushrooms"
              type="radio"
              checked={form.yearsPickingMushrooms === "0-5"}
              value="0-5"
              onChange={setFormValue}
            />

            <input
              name="yearsPickingMushrooms"
              type="radio"
              checked={form.yearsPickingMushrooms === "5-10"}
              value="5-10"
              onChange={setFormValue}
            />

            <input
              name="yearsPickingMushrooms"
              type="radio"
              checked={form.yearsPickingMushrooms === "10+"}
              value="10+"
              onChange={setFormValue}
            />
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
              setFormValue={setFormValue}
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
      {step === "summary" && <p>{form.name}</p>}
    </Container>
  );
};
