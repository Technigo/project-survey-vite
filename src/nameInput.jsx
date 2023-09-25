import React, { useState } from "react";
import "./index.css";

export const NameInput = () => {
    const [name, setName] = useState("");

    return (
        <form>
            <h1>What is your name?</h1>
            <input
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
            />

        </form>

    );
};
