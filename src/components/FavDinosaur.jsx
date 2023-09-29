
export const FavDinosaur = ({ updateFormData, value }) => {

    const chosenDinosaur = (event) => updateFormData("favDinosaur", event.target.value);

    console.log(chosenDinosaur);

    return (
        <div class="dino">What is your favourite Dinosaur?
            <p>
                <label>
                    <input type="radio"
                        value="tyrannosaurus"
                        onChange={chosenDinosaur}
                        checked={value === "tyrannosaurus"}
                    />
                    <img src="public/assets/trex.png" alt="Tyrannosaurus"></img> Tyrannosaurus
                </label>
            </p>
            <p>
                <label>
                    <input type="radio"
                        value="stegosaurus"
                        onChange={chosenDinosaur}
                        checked={value === "stegosaurus"}
                    />

                    <img src="public/assets/stegosaurus.png" alt="Stegosaurus"></img>Stegosaurus
                </label>
            </p>
            <p>
                <label>
                    <input type="radio"
                        value="triceratops"
                        onChange={chosenDinosaur}
                        checked={value === "triceratops"}
                    />
                    <img src="public/assets/triceratops.png" alt="Triceratops"></img>Triceratops
                </label>
            </p>
            <p>
                <label>
                    <input type="radio"
                        value="velociraptor"
                        onChange={chosenDinosaur}
                        checked={value === "velociraptor"}
                    />

                    <img src="public/assets/velociraptor.png" alt="Velociraptor"></img>Velociraptor
                </label>
            </p>
        </div>
    )
}
//Jennie's example says to use an array and map it, less code, less duplication, but below I have done it the long way