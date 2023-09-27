import React, { useState } from 'react'
import "./assets/eco-leaf.png"
import "./EcoCheck.css"


export const EcoCheck = () => {

    const [yesEco, setYesEko] = useState(false)

    const handleCheckboxChange = (event) => {
        setYesEko(event.target.checked)
    }

    return (
        <div>
            <h3>This is eco check</h3>
            <img src="./assets" alt=""></img>
            <label>
                <input  type="checkbox"
                        checked={yesEco}
                        onChange={handleCheckboxChange} 
                />
                Want to stay on the ground?
            </label>
        </div>
    )
}