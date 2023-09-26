

export const ContinentQuestion = ({ value, setValue}) => {
  
    const continent = value
    const setContinent = setValue
  
    return (

    <div className="first-question">
        <select
        onChange ={event => setContinent (event.target.value)}
        value= {continent}>
            <option value="">Which continent would do like to travel to?</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="America">America</option>
        </select>
    </div>
  )
}
