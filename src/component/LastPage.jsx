import { DrinkSuggestion } from "./DrinkSuggestion";

export const LastPage = ({ information }) => {
  // let { name, age, preference, spirit } = information;

  return (
    <>
      {/* <ul className="square-bullets">
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Preference: {preference}</li>
        <li>Spirit: {spirit}</li>
      </ul> */}

      <DrinkSuggestion />
    </>
  );
};
