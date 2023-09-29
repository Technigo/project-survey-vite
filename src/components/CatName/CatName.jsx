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
          className="cat-name-input"
          type="text"
          name="catName"
          value={catName}
          onChange={catNameInput}
          placeholder="Garfield..."
        />
        <p className="p-suggestions">
          E.g. Whiskers, Luna, Sylvester
        </p>
      </label>
    </form>
  );
};
