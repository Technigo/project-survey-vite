import { useState } from "react";
import { Username } from "./components/Username/Username";
import { Gender } from "./components/Gender/Gender";
import { CatProfile } from "./components/CatProfile";
// import { Age } from "./Age/Age";
// import { ChooseCat } from "./ChooseCat/ChooseCat";
// import { StartPage } from "./StartPage/StartPage";
// import { CatName } from "./CatName/CatName";
// import { Personality } from "./Personality/Personality";
// import { CatProfile } from "./components/CatProfile";

export const App = () => {
  // const [step, setStep] = useState(1);
  // const [age, setAge] = useState("");
  // const [catName, setCatName] = useState("");
  // const [chooseCat, setChooseCat] = useState("");
  const [gender, setGender] = useState("");
  // const [personality, setPersonality] = useState("");
  // const [startPage, setStartPage] = useState("");
  const [userName, setUserName] = useState("");
  return (
    <div>
      <Username userName={userName} setUserName={setUserName} />
      <Gender gender={gender} setGender={setGender} />
      <CatProfile />
    </div>
  );
};
