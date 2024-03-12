import 'react';
import { DropDown } from "./DropDown";
import { TextInput } from "./TextInput";
import { RadioButtons } from "./RadioButtons";

export const SurveyForm = () => {
  return (
    <div>
      <DropDown />
      <TextInput />
      <RadioButtons />
    </div>
  );
};