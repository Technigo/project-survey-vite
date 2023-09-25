import React, { useState } from "react";
import "./index.css";

export const DropDown = () => {
    const [food, setFood] = useState("");

    return (
        <form>
            <h1>What would you like to eat?</h1>
            <select
                onChange={event => setFood(event.target.value)}
                value={food}
            >
                <option value="">Select food</option>
                <option value="pizza">pizza</option>
                <option value="pasta">pasta</option>
            </select>

        </form>
    );
};
