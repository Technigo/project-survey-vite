import "./CatProfile.css";
import { catOptions, genderGroups, personalityTypes } from "./Arrays";

export const CatProfile = ({
  userName,
  genders,
  age,
  personality,
  chooseCat,
  catName,
}) => {
  // Uses the find method to search through the 'catOptions'-array to find object whose id property matches the value of chooseCat.
  const selectedCat = catOptions.find(
    (catOption) => catOption.id === chooseCat
  );
  // If selectedCat is found, use its imgSrc; otherwise, use a default value
  const catImageSrc = selectedCat ? selectedCat.imgSrc : "";

  // Uses the find method to search through the 'genderGroups'-array to find bject whose id property matches the value of genders.
  const selectedGender = genderGroups.find(
    (genderOption) => genderOption.id === genders
  );

  const genderIconSrc = selectedGender ? selectedGender.imgSrc : "";

  // Uses the find method to search through the 'personalityTypes'-array to find bject whose id property matches the value of personality.
  const selectedPersonality = personalityTypes.find(
    (pType) => pType.id === personality
  );

  const pDescription = selectedPersonality
    ? selectedPersonality.description
    : "";

  // Thi is a summary of all the input from the user presented in a nice format.
  return (
    <div className="cat-profile-wrapper">
      <div className="cat-image">
        <img src={catImageSrc} alt="" />
      </div>
      <div className="cat-info">
        <div className="name-gender-container">
          <h3 className="cat-name">{catName}</h3>
          <img src={genderIconSrc} alt="" />
        </div>
        <div className="cat-details-container">
          <div className="personality-container">
            <h4>Personality</h4>
            <p className="p-profile">{personality}</p>
          </div>
          <div className="vl"></div>
          <div className="age-container">
            <h4>Age</h4>
            <p>{age}</p>
          </div>
          <div className="vl"></div>
          <div className="owner-container">
            <h4>Owner</h4>
            <p>{userName}</p>
          </div>
        </div>
        <div className="description-container">
          <p>
            Congratulations {userName}! You've chosen such a wonderful cat.
            Wishing you and your new fur baby {catName} a lifetime of happiness
            together! 😸
          </p>
          <br />
          <p>
            {/* Prettier made the {" "} */}
            You have chosen a cat with the personality type, {personality}.{" "}
            {pDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
