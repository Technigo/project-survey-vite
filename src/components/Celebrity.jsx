/* eslint-disable react/prop-types */
export const Celebrity = ({ user, handleInputChange }) => {
  return (
    <div className="question-container">
  
      <label htmlFor="celebrity" className="question">Which celebrity would you like to go with?</label>
      <select
        name="celebrity"
        id="celebrity"
        value={user.celebrity} 
        onChange={handleInputChange} 
      >
  <option value=""> -- Select celebrity -- </option>
  <option value="Lotta Engberg">Lotta Engberg</option>
  <option value="Zlatan Ibrahimović">Zlatan Ibrahimović</option>
  <option value="Zara Larsson">Zara Larsson</option>
  <option value="Robert Lewandowski">Robert Lewandowski</option>
  <option value="Swedish King Carl Gustav">King Carl Gustav</option>
  <option value="Brad Pitt">Brad Pitt</option>
  <option value="Angelina Jolie">Angelina Jolie</option>
  <option value="Iga Swiatek">Iga Świątek</option> 
</select>
    </div>
  )
}
