import "./CatProfile.css";
// import { useState } from "react";

export const CatProfile = ({
  userName,
  genders,
  age,
  personality,
  chooseCat,
  catName,
  catOptions,
}) => {
  // Find the selected cat object based on chooseCat ID
  const selectedCat = catOptions.find(
    (catOption) => catOption.id === chooseCat
  );

  // If selectedCat is found, use its imgSrc; otherwise, use a default value
  const catImageSrc = selectedCat ? selectedCat.imgSrc : "";

  console.log("chooseCat:", chooseCat);
  return (
    <div className="cat-profile-wrapper">
      <div className="cat-image">
        <img src={catImageSrc} alt="" />
      </div>
      <div className="cat-info">
        <div>
          <h3>{catName}</h3>
          <p>{genders}</p>
        </div>
        <div className="cat-details-container">
          <div className="personality-container">
            <h4>Personality</h4>
            <p>{personality}</p>
          </div>
          <div className="age-container">
            <h4>Age</h4>
            <p>{age}</p>
          </div>
          <div className="owner-container">
            <h4>Owner</h4>
            <p>{userName}</p>
          </div>
        </div>
        <div className="description-container">
          <p>
            Congratulations {userName}! Hope you and {catName} will live happily
            ever after 😸
          </p>
          <p>Your cat is {personality} and </p>
        </div>
      </div>
    </div>
  );
};
