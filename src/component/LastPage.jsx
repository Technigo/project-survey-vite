import { DrinkSuggestion } from "./DrinkSuggestion";

export const LastPage = ({ information, headerVisibility, headerContent }) => {

  let setLastP = headerVisibility
  let setLastHeader = headerContent

  let { name, age, preference, spirit } = information;

  let bigName = name.toUpperCase()

  setLastP(true)
  setLastHeader(`${bigName}'S DRINK`)

  return (
    <>
      {/* <ul className="square-bullets">
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Preference: {preference}</li>
        <li>Spirit: {spirit}</li>
      </ul> */}

      <DrinkSuggestion preference={preference} spirit={spirit} age={age} />
    </>
  );
};
