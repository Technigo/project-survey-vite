import { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Select from "./components/Select";
import TextInput from "./components/TextInput";
import RadioGroup from "./components/RadioGroup";
import CheckboxGroup from "./components/CheckboxGroup";
import Button from "./components/Button";
import Header from "./components/Header";

// Takes an array of words (["Apple", "Banana", "Cherry"]) as argument
// Returns a nicely formatted string: Apple, Banana or Cherry
const formatPreparation = (words) => {
    if (words.length === 1)
        return words[0].toLowerCase();

    const listOfWords = [...words];
    const lastWord = listOfWords.pop();

    return `${listOfWords.join(", ").toLowerCase()} or ${lastWord.toLowerCase()}`;
}

export const App = () => {
    // This will act as "database" for our form where we store our values to pass them to the components.
    const [form, setForm] = useState({
        name: "",
        prepareMushroom: [],
        favoriteMushroom: "",
        yearsPickingMushrooms: "",
    });

    // State to manage the current step of the form (e.g., "form" or "summary").s
    const [step, setStep] = useState("form");

    // Function to switch to the summary step.
    const goToSummary = () => setStep("summary");

    // Function that restarts the form when clicking the restart button,
    const restart = () => {
        setForm({
            name: "",
            prepareMushroom: [],
            favoriteMushroom: "",
            yearsPickingMushrooms: "",
        });

        setStep("form")
    };

    // Sets a value in our form based on the name property of our target input.
    const setFormValue = (event) => {
        // Destructuring event.target to get the 'name' and 'value' properties.
        const { name, value } = event.target;

        // Updating the 'form' state with the new value.
        setForm({
            ...form,// Keeping the existing form values
            [name]: value,// Updating the specified field with the new value
        });
    };

    // Function to handle preparation checkbox selections.
    const setPreparation = (event) => {
        const { value } = event.target;
        setForm({
            ...form, // Keeping the existing form values
            prepareMushroom: form.prepareMushroom.includes(value)
                // If the value is already in prepareMushroom array, remove it. Otherwise, add it.
                ? form.prepareMushroom.filter((wayOfPreparation) => wayOfPreparation !== value)
                : [...form.prepareMushroom, value],
        });
    }

    // Submit button is disabled if the form values are not filled in.
    const submitIsDisabled = form.name === "" || form.favoriteMushroom === "" || form.yearsPickingMushrooms === "" || form.prepareMushroom.length === 0

    return (
        <Container>
            {step === "form" && (
                <>
                    <h1>Welcome to our mushroom survey!</h1>
                    <Header />

                    <Card>
                        <label htmlFor="name">What is your name?</label>
                        <TextInput
                            name="name"
                            value={form.name}
                            onChange={setFormValue}
                            placeholder="Your name"
                        />
                    </Card>

                    <Card>
                        <label htmlFor="yearsPickingMushrooms">How many years have you been picking mushrooms?</label>
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
                        <label htmlFor="favoriteMushroom">What is your favourite mushroom?</label>
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
                        <label htmlFor="prepareMushrooms">How would you like your mushrooms cooked?</label>
                        <CheckboxGroup
                            name="prepareMushroom"
                            value={form.prepareMushroom}
                            onChange={setPreparation}
                            options={[
                                "Fried",
                                "Stewed",
                                "Sautéed",
                            ]}
                        />
                    </Card>

                    <Button onClick={goToSummary} disabled={submitIsDisabled}>
                        {submitIsDisabled ? "Fill in the form to submit" : "Submit"}
                    </Button>
                </>
            )}
            {step === "summary" && (
                <>
                    <Card>
                        <p>You have been picking mushrooms for {form.yearsPickingMushrooms} years. You prefer {form.favoriteMushroom.toLowerCase()} and you like them {formatPreparation(form.prepareMushroom)}. Thank you {form.name} for answering our mushroom survey!</p>
                    </Card>

                    <Button onClick={restart}>Restart</Button>
                </>
            )}
        </Container>
    );
};
