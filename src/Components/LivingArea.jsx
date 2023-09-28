/* eslint-disable react/prop-types */



export const LivingArea = ({livingArea, onChangeLivingArea}) => {
    return (
        <div className="living-area">
            <label>
                Which area do you live in?
                <select value={livingArea} onChange={onChangeLivingArea}>
                    <option value="select" disabled>Please select one option</option>
                    <option value="city">In the city</option>
                    <option value="countryside">In the countryside</option>
                </select>
            </label>
        </div>
    )
}
