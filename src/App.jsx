import { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Select from "./components/Select";
import TextInput from "./components/TextInput";
import RadioGroup from "./components/RadioGroup";

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
                        <TextInput
                            name="name"
                            label="Name"
                            value={form.name}
                            onChange={setFormValue}
                            placeholder="Your name"
                        />
                    </Card>

                    <Card>
                        <p>How many years have you been picking mushrooms?</p>
                        <RadioGroup
                            name="yearsPickingMushrooms"
                            value={form.yearsPickingMushrooms}
                            onChange={setFormValue}
                            options={[
                                "0-5",
                                "5-10",
                                "10+",
                            ]}
                        />
                    </Card>

                    <Card>
                        <p>What is your favourite mushroom?</p>
                        <Select
                            name="favoriteMushroom"
                            value={form.favoriteMushroom}
                            onChange={setFormValue}
                            options={[
                                "Chanterelle",
                                "Porcini",
                                "Black Trumpet",
                                "Morel",
                            ]}
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
