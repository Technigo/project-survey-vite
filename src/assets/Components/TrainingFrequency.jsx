import { useState } from 'react';

export const TrainingFrequency = () => {
    const [frequency, setFrequency] = useState("Rarely");
    
    const updateFrequency = (e) => {
        setFrequency(e.target.value);
    };
    
    return (
        <div className="training-frequency">
            <label>How often do you engage in physical exercises?</label>
            
            <label>
                Daily
                <input 
                    type="radio" 
                    name="daily"
                    id="daily"
                    value="Daily"
                    checked={frequency==="Daily"}
                    onChange={updateFrequency} 
                />
            </label> 

            <label>
                One to three times per week
                <input 
                    type="radio" 
                    name="per-week"
                    id="per-week"
                    value="One to three times per week"
                    checked={frequency==="One to three times per week"}
                    onChange={updateFrequency} 
                />
            </label>

            <label>
                Once to twice per month
                <input 
                    type="radio" 
                    name="per-month"
                    id="per-month"
                    value="Once to twice per month"
                    checked={frequency==="Once to twice per month"}
                    onChange={updateFrequency} 
                />
            </label>

            <label>
                Rarely
                <input 
                    type="radio" 
                    name="rarely"
                    id="rarely"
                    value="Rarely"
                    checked={frequency==="Rarely"}
                    onChange={updateFrequency} 
                />
            </label>
        </div>
    )
}
