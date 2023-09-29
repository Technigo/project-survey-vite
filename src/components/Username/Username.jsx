import "./Username.css";

export const Username = ({ userName, setUserName }) => {
  const userNameInput = (e) => setUserName(e.target.value);

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="user-name-form">
      <h3>What is your name?</h3>
      <p>Please tell us your name. It helps us stay connected, provide tailored advice, and ensures our records are purrfectly accurate. Plus, it makes our adoption journey even more pawsome!🐾😺 </p>
      {/* Using label element to improve accssibility and user experience. */}
      <label>
        Name: 
        <input
          type="text"
          className="user-name-input"
          name="userName" 
          value={userName}
          onChange={userNameInput}
          placeholder="Write your name here..." required
          
        />
      </label>
    </form>
  );
};
