import { useState } from "react";

export const FavDinosaur = ({ updateFormData, value }) => {

    const favDinosaur = (event) => updateFormData("favDinosaur", event.target.value);

    const [dinosaur, SetDinosaur] = useState();

    console.log(dinosaur);

    //Below are the radio buttons for 4 dinosaurs, should we use images for the dinosaurs??? considering this is for kids and we want to make it accessible

    //Jennie's example says to use an array and map it, less code, less duplication, but below I have done it the long way

    return (
        <div>Favourite Dinosaur
            <p>
                <label>
                    <input type="radio"
                        value="tyrannosaurus"
                        onChange={event => favDinosaur(event.target.value)}
                        checked={dinosaur === "tyrannosaurus"}
                    />
                    Tyrannosaurus
                </label>
            </p>
            <p>
                <label>
                    <input type="radio"
                        value="stegosaurus"
                        onChange={event => favDinosaur(event.target.value)}
                        checked={dinosaur === "stegosaurus"}
                    />
                    Stegosaurus
                </label>
            </p>
            <p>
                <label>
                    <input type="radio"
                        value="triceratops"
                        onChange={event => favDinosaur(event.target.value)}
                        checked={dinosaur === "triceratops"}
                    />
                    Triceratops
                </label>
            </p>
            <p>
                <label>
                    <input type="radio"
                        value="velociraptor"
                        onChange={event => favDinosaur(event.target.value)}
                        checked={dinosaur === "velociraptor"}
                    />
                    Velociraptor
                </label>
            </p>
        </div>
    )
}
