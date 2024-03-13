import { Header } from "./Header.jsx";
import { NameInput } from "./NameInput.jsx";
import { SubmitButton } from "./SubmitButton.jsx";

export const App = () => {
  return (
    <div className="container">
      <header className="header-box">
        <Header />
      </header>
      <form onSubmit={(event) => event.preventDefault()}>
        <h3>How was your experience</h3>
        <NameInput />
        <SubmitButton />
      </form>
    </div>
  );
};
