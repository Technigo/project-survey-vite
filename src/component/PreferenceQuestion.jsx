/* eslint-disable react/prop-types */
const preferences = ["cocktails", "tropical drinks", "tumbler"];
const imageURL = ["./cocktail.png", "./tropical.png", "./tumbler.png"];

export const PreferenceQuestion = ({ value, setValue }) => {
  const preference = value;

  const preferenceInput = (event) => setValue("preference", event.target.value);

  return (
    <div className="radio-buttons">
      {preferences.map((group, index) => (
        <label key={group} className="icon-container">
          <input
            type="radio"
            value={group}
            onChange={preferenceInput}
            checked={preference === group}
          />
          <span className="custom-radio"></span>
          {group}
          <img src={imageURL[index]} className="icons" id={group} />
        </label>
      ))}
    </div>
  );
};
