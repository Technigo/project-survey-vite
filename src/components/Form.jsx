import { NameInput } from "./NameInput.jsx";
import { SubmitButton } from "./SubmitButton.jsx";
import { CourseInput } from "./CourseInput.jsx";
import { LevelOptions } from "./LevelOptions.jsx";
import { TextInput } from "./TextInput.jsx";
import { YesNoOption } from "./YesNoOption.jsx";

export const Form = () => {
  return (
    <form>
      <h3>How was your experience?</h3>
      <p>Help us be better and to deliver top notch courses.</p>
      <NameInput />
      <CourseInput />
      <LevelOptions />
      <TextInput />
      <YesNoOption />
      <SubmitButton />
    </form>
  );
};
