/* eslint-disable react/prop-types */
export const SelectPerson = ({ user, handleInputChange }) => {
  return (
    <div className="question-container" >
       <p className="question">Who should pay?</p>
<div className="options">
<label className="option">
        <input
          type="radio"
          name="payingPerson"
          value="You"
           checked={user.payingPerson === 'You'}
        onChange={handleInputChange} 
        />You
      </label>
      
      <label className="option">
        <input
          type="radio"
          name="payingPerson"
          value="Your partner"
          checked={user.payingPerson === 'Your partner'}
        onChange={handleInputChange} 
        />Your partner
      </label>
      
      <label className="option">
        <input
          type="radio"
          name="payingPerson"
          value="Your parents"
          checked={user.payingPerson === 'Your parents'}
        onChange={handleInputChange} 
        />Your parents
      </label>
      
      <label className="option">
        <input
          type="radio"
          name="payingPerson"
          value="Your siblings"
          checked={user.payingPerson === 'Your siblings'}
        onChange={handleInputChange} 
        /> Your siblings
      </label>
        </div>
    </div>
  )
}
