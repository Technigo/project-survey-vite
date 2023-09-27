
export const FavDinosaur = ({ updateFormData, value }) => {

    const chosenDinosaur = (event) => updateFormData("favDinosaur", event.target.value);

    console.log(chosenDinosaur);

    return (
        <div>What is your favourite Dinosaur?
            <p>
                <label>
                    <input type="radio"
                        value="tyrannosaurus"
                        onChange={chosenDinosaur}
                        checked={value === "tyrannosaurus"}
                    />
                    Tyrannosaurus
                </label>
            </p>
            <p>
                <label>
                    <input type="radio"
                        value="stegosaurus"
                        onChange={chosenDinosaur}
                        checked={value === "stegosaurus"}
                    />
                    Stegosaurus
                </label>
            </p>
            <p>
                <label>
                    <input type="radio"
                        value="triceratops"
                        onChange={chosenDinosaur}
                        checked={value === "triceratops"}
                    />
                    Triceratops
                </label>
            </p>
            <p>
                <label>
                    <input type="radio"
                        value="velociraptor"
                        onChange={chosenDinosaur}
                        checked={value === "velociraptor"}
                    />
                    Velociraptor
                </label>
            </p>
        </div>
    )
}
//Jennie's example says to use an array and map it, less code, less duplication, but below I have done it the long way