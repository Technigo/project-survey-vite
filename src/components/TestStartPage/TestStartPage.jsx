export const TestStartPage = ({ userName, setUserName }) => {
  const userNameInput = (event) => {
   setUserName(event.target.value);
} 
  return (
    <form className="username-form" onSubmit={(event) => event.preventDefault()} required>
      <h1>Adopt a Cat</h1>
      <h2>Find your fur-ever pet!</h2>
        <input aria-label="username input"
          type="text"
          name="userName"
          value={userName}
          onChange={userNameInput}
          placeholder="Write your name"
        />
        <button id="adoptBtn" className="adopt-btn" type="submit">Continue</button>
    </form>
    
  );
};