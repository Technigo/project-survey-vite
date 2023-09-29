import "../css-components/select.css"

export const Wish = ({ updateFormData, value }) => {

    // const [wish, setWish] = useState('');
    const wishChoice = (event) => updateFormData("wishChoice", event.target.value)
    return (
        <span>
            <form className="wish-form">
                <p>Finally, which wish resonates with you?</p>
                <label className="custom-selector">
                    <select
                        value={value}
                        onChange={wishChoice}
                    >
                        <option value="">Make a wish:</option>
                        <option value="endless joy">endless joy</option>
                        <option value="everlasting cheer">everlasting cheer</option>
                        <option value="eternal glee">eternal glee</option>
                        <option value="perpetual delight">perpetual delight</option>

                    </select>
                </label>
            </form>
        </span >
    )
}
