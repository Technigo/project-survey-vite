import PropTypes from "prop-types";

export const TrainingFrequency = ({freq, onChangeFreq}) => {    
    return (
        <div className="training-frequency">
            <label>How often do you engage in physical exercises?</label>
            <div className="frequency-options">
                <label>
                    <input 
                        type="radio" 
                        name="daily"
                        id="daily"
                        value="Daily"
                        checked={freq === "Daily"}
                        onChange={onChangeFreq} 
                    />
                    Daily
                </label> 

                <label>
                    <input 
                        type="radio" 
                        name="per-week"
                        id="per-week"
                        value="One to three times per week"
                        checked={freq === "One to three times per week"}
                        onChange={onChangeFreq} 
                    />
                    One to three times per week
                </label>

                <label>
                    <input 
                        type="radio" 
                        name="per-month"
                        id="per-month"
                        value="Once to twice per month"
                        checked={freq === "Once to twice per month"}
                        onChange={onChangeFreq} 
                    />
                    Once to twice per month
                </label>

                <label>
                    <input 
                        type="radio" 
                        name="rarely"
                        id="rarely"
                        value="Rarely"
                        checked={freq === "Rarely"}
                        onChange={onChangeFreq} 
                    />
                    Rarely
                </label>
            </div>
        </div>
    )
};

TrainingFrequency.propTypes = {
    freq: PropTypes.string,
    onChangeFreq: PropTypes.func
};
