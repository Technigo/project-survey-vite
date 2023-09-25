import React from "react";
import { HeaderText } from "./Header";
import { NameInput } from "./nameInput";
import { DropDown } from "./dropDown";
import { AgeGroup } from "./radioButton";
import { NextBtn } from "./nextBtn";
import "./index.css";

export const App = () => {


  return (
    <>
      <HeaderText />
      <NameInput />
      <DropDown />
      <AgeGroup />
      <NextBtn />
    </>
  );
};
