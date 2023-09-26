import { useState } from "react"

export const Pumpkins = () => {

    const [pumpkins, setPumpkins] = useState('');

    return (
        <form className="pumpkin-adjective-form">
            <select
                value={pumpkins}
                onChange={(event) => setPumpkins(event.target.value)}
            >
                <option value="">Select a mystical descriptor:</option>
                <option value="luminous">luminous</option>
                <option value="entwined">entwined</option>
                <option value="floating">floating</option>
                <option value="ethereal">ethereal</option>
            </select>
        </form>
    )
}