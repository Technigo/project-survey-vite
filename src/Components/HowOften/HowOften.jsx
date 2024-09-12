import style from "./HowOften.module.css";


export const HowOften = ({ updateFormData, value }) => {
  const handleHowOftenChange = (e) => updateFormData("howOften", e.target.value);

  return (
    <div>
     <h2>2. Please help us understand why you stopped ordering from us. Choose the primary reason:</h2>
    
      <select onChange={handleHowOftenChange} value={value} className={style.input_wrapper} > 

        <option value="">Options: </option>
        <option value="Monthly">Monthly</option>
        <option value="Every-second-month">Every second month</option>
        <option value="Rarely">Rarely</option>
        <option value="Never">Never</option>
      </select>
    </div>
  );
};
