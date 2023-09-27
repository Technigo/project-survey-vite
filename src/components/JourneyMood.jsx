import { useState } from "react"

const journeys = ["eerie shadows", "mysterious forms", "ghostly shapes"]

export const JourneyMood = () => {

    const [journey, setJourney] = useState('');

    return (
        <form>
            {journeys.map((journeyChoice) => (
                <label key={journeyChoice}>
                    <input
                        type="radio"
                        value={journeyChoice}
                        onChange={(event) => setJourney(event.target.value)}
                        checked={journey === journeyChoice}
                    />
                </label>
            ))}
        </form>
    );

}
