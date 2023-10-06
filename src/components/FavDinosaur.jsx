
export const FavDinosaur = ({ updateFormData, value }) => {

    const chosenDinosaur = (event) => updateFormData("favDinosaur", event.target.value);

    return (
        <div className="dino">What is your favourite Dinosaur?
            <p>
                <label>
                    <input type="radio"
                        value="tyrannosaurus"
                        onChange={chosenDinosaur}
                        checked={value === "tyrannosaurus"}
                    />
                    <img src="/assets/trex.png" alt="Tyrannosaurus"></img> Tyrannosaurus
                </label>
            </p>
            <p>
                <label>
                    <input type="radio"
                        value="stegosaurus"
                        onChange={chosenDinosaur}
                        checked={value === "stegosaurus"}
                    />

                    <img src="/assets/stegosaurus.png" alt="Stegosaurus"></img>Stegosaurus
                </label>
            </p>
            <p>
                <label>
                    <input type="radio"
                        value="triceratops"
                        onChange={chosenDinosaur}
                        checked={value === "triceratops"}
                    />
                    <img src="/assets/triceratops.png" alt="Triceratops"></img>Triceratops
                </label>
            </p>
            <p>
                <label>
                    <input type="radio"
                        value="velociraptor"
                        onChange={chosenDinosaur}
                        checked={value === "velociraptor"}
                    />

                    <img src="/assets/velociraptor.png" alt="Velociraptor"></img>Velociraptor
                </label>
            </p>
        </div>
    )
}
//Jennie's example says to use an array and map it, less code, less duplication, but I have done it the long way