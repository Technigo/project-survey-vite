import "./Gender.css";
import { genderGroups } from "../Arrays.jsx";

export const Gender = ({ genders, setGenders }) => {
  const handleGenders = (event) => {
    setGenders(event.target.value);
  };
  return (
    <form
      className="gender-form"
      onSubmit={(event) => event.preventDefault()}
      required
    >
      <h3>Choose the cat's gender</h3>
      {genderGroups.map((gender) => (
       <div className="radio-input-wrapper">
        {/* Using label element to improve accssibility and user experience. The 'Key' prop is used to uniquely identify each label element and it's is important for React's virtual DOM to efficiently track and update elements.  */}
        <label className ="label" key={gender.id}>
          <input
            type="radio"
            className="radio-input"
            value={gender.id}
            onChange={handleGenders}
            checked={genders === gender.id}
          /> 
          <div className="radio-design"></div>
          <div className="label-text">{gender.id}</div>
        </label>
      </div>
      ))}

{/* <div className="radio-input-wrapper">
  <label className="label">
    <input value="value-2" name="value-radio" id="value-2" className="radio-input" type="radio"/>
    <div className="radio-design"></div>
    <div className="label-text">Clouds</div>
  </label>
</div> */}

    </form>
  );
};


