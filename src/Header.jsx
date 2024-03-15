import "./Header.css";

/*Funtional component for header*/
export const Header = () => {
  return (
    <header className="header">
      <div className="img-container">
        <img src="./src/assets/technigo-logo.png" alt="technigo-logo" />
      </div>
      <div className="text-container">
        <h1>Break the ice with Technigo</h1>
        <p>Get to know your team mates!</p>
      </div>
    </header>
  );
};