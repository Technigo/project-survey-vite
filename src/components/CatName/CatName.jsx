import "./CatName.css";

export const CatName = ({ catName, setCatName }) => {
  const catNameInput = (event) => setCatName(event.target.value);

  // Event handler for changes in the input fields
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    // Sets up an event handler for when the form is submitted. It will call the handleSubmit function when the form is submitted.
    <form onSubmit={handleSubmit} className="cat-name-form">
      <h3>Give your cat a name</h3>
      {/* Using label element to improve accssibility and user experience. */}
      <label>
        <input
          className="text-input"
          type="text"
          name="catName"
          value={catName}
          onChange={catNameInput}
          placeholder="Write your cat name here..."
        />
        <p className="p-suggestions">
          <br />
          E.g. Whiskers, Luna, Sylvester
        </p>
      </label>
    </form>
  );
};
