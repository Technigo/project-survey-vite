
export const PumpkinAdjective = ({ updateFormData, value }) => {

    // const [pumpkins, setPumpkins] = useState('');
    const pumpkinAdjective = (event) => updateFormData("pumpkinAdjective", event.target.value);

    return (
        <span>
            <form className="pumpkin-adjective-form">
                <select
                    value={value}
                    onChange={pumpkinAdjective}
                >
                    <option value="">Select a mystical descriptor:</option>
                    <option value="luminous">luminous</option>
                    <option value="entwined">entwined</option>
                    <option value="floating">floating</option>
                    <option value="ethereal">ethereal</option>
                </select>
            </form>
        </span>
    )
}
