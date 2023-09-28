import "./Username.css";

export const Username = ({ userName, setUserName }) => {
  const userNameInput = (e) => setUserName(e.target.value);

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="user-name-input">
      <h3>What is your name?</h3>
      <p>We need your name to reserve your cat for you. bla bla</p>
      <label>
        Write your name here..
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={userNameInput}
          placeholder="Name..."
          required
        />
      </label>
    </form>
  );
};
