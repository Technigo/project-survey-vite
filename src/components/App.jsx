import { Header } from "./Header.jsx";
import { NameInput } from "./NameInput.jsx";
import { SubmitButton } from "./SubmitButton.jsx";
import { EmailInput } from "./EmailInput.jsx";
import { CourseInput } from "./CourseInput.jsx";

export const App = () => {
  return (
    <div className="container">
      <header className="header-box">
        <Header />
      </header>
      <form onSubmit={(event) => event.preventDefault()}>
        <h3>How was your experience</h3>
        <NameInput />
        <EmailInput />
        <CourseInput />
        <SubmitButton />
      </form>
    </div>
  );
};
