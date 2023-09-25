import React, { useState } from "react";
import { CatProfile } from "./components/CatProfile";

export const App = () => {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState("");
  const [catName, setCatName] = useState("");
  const [chooseCat, setChooseCat] = useState("");
  const [gender, setGender] = useState("");
  const [personality, setPersonality] = useState("");
  const [startPage, setStartPage] = useState("");

  return <div>Find me in src/app.jsx!</div>;
};
