import React from "react";

export const FinalStory = ({
  age,
  name,
  favorite,
  secondFavorite,
  workrole,
  feeling,
}) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>
        You are currently {age} years old, the best age. You work as an{" "}
        {workrole}, and i have heard that you are really good at your job. Your
        favorite thing to do in life is, besides {secondFavorite}, {favorite}.
        Right now you are feeling
        {feeling}. I really hope that you have an awesome day 🐨
      </p>
    </div>
  );
};
