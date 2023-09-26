import "./Username.css";

export const Username = ({ userName, setUserName }) => {
  const userNameInput = (e) => setUserName(e.target.value);

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="user-name-input">
      <input
        type="text"
        name="userName"
        value={userName}
        onChange={userNameInput}
      />
    </form>
  );
};
