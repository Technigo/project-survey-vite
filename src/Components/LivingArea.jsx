/* eslint-disable react/prop-types */


export const LivingArea = ({livingArea ,onChaneLiving}) => {
    /* Initialize a state for the dropdown list of the environment question */
    

    /* Update the state of the environment based on the user's selected option */
  
    return (
        <div className="living-area">
            <label>
                Which area do you live in?
                <select value={livingArea} onChange={onChaneLiving}>
                    <option value="select" disabled >Please select one option</option>
                    <option value="city" >In the city</option>
                    <option value="countryside">In the countryside</option>
                </select>
            </label>
        </div>
    )
}
