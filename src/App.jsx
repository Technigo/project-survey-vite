import { useState } from "react";
import { Username } from "./components/Username/Username";
import { Gender } from "./components/Gender/Gender";
import { CatProfile } from "./components/CatProfile";
import { Age } from "./components/Age/Age";
import { ChooseCat } from "./components/ChooseCat/ChooseCat";
// import { StartPage } from "./StartPage/StartPage";
import { CatName } from "./components/CatName/CatName";
import { Personality } from "./components/Personality/Personality";
// import { CatProfile } from "./components/CatProfile";

export const App = () => {
  // const [step, setStep] = useState(1);
  const [age, setAge] = useState("");
  const [catName, setCatName] = useState("");
  const [chooseCat, setChooseCat] = useState("");
  const [genders, setGenders] = useState("");
  const [personality, setPersonality] = useState("");
  // const [startPage, setStartPage] = useState("");
  const [userName, setUserName] = useState("");
  
  return (
    <div>
      <Username userName={userName} setUserName={setUserName} />
      <Gender genders={genders} setGenders={setGenders} />
      <Age age={age} setAge={setAge} />
      <Personality personality={personality} setPersonality={setPersonality} />
      <ChooseCat chooseCat={chooseCat} setChooseCat={setChooseCat} />
      <CatName catName={catName} setCatName={setCatName} />
      {/* <CatProfile /> */}
    </div>
  );
};
