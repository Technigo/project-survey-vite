export const AdjectiveTown = ({ updateFormData, value }) => {

    // const [describeTown, setDescribeTown] = useState('');
    const townAdjective = (event) => updateFormData("townAdjective", event.target.value);

    return (
        <span className="town-span">
            <form className="town-adjective-form">
                <select
                    value={value}
                    onChange={townAdjective}
                >
                    <option value="">Describe the town mood:</option>
                    <option value="quiet">quiet</option>
                    <option value="still">still</option>
                    <option value="sinister">sinister</option>

                </select>
            </form>
        </span>
    )
}

