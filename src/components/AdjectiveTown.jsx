import { useState } from "react";

export const AdjectiveTown = () => {
    const [describeTown, setDescribeTown] = useState('');

    return (
        <form>
            <select
                value={describeTown}
                onChange={(event) => setDescribeTown(event.target.value)}
            >
                <option value="">Choose an option</option>
                <option value="quiet">quiet</option>
                <option value="still">still</option>
                <option value="sinister">sinister</option>

            </select>
        </form>
    )
}
