/* eslint-disable react/prop-types */
export const SelectPerson = ({ user, handleInputChange }) => {
  return (
    <div className="question-container" >
       <p className="question">Who will be pay?</p>
<div className="options">
<label className="radio-person">
        <input
          type="radio"
          name="payingPerson"
          value="You"
           checked={user.payingPerson === 'You'}
        onChange={handleInputChange} 
        />You
      </label>
      
      <label className="radio-person">
        <input
          type="radio"
          name="payingPerson"
          value="Your partner"
          checked={user.payingPerson === 'Your partner'}
        onChange={handleInputChange} 
        />Your partner
      </label>
      
      <label className="radio-person">
        <input
          type="radio"
          name="payingPerson"
          value="Your parents"
          checked={user.payingPerson === 'Your parents'}
        onChange={handleInputChange} 
        />Your parents
      </label>
      
      <label className="radio-person">
        <input
          type="radio"
          name="payingPerson"
          value="Your siblings"
          checked={user.payingPerson === ' Your siblings'}
        onChange={handleInputChange} 
        /> Your siblings
      </label>
      
      <label className="radio-person">
        <input
          type="radio"
          name="payingPerson"
          value="Gift card"
          checked={user.payingPerson === 'Gift card'}
        onChange={handleInputChange} 
        />Gift card
        </label>
        </div>
    </div>
  )
}
